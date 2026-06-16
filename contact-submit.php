<?php

declare(strict_types=1);

$config = require __DIR__ . '/contact-config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirectTo(buildRedirectUrl($config['contact_page'] ?? 'contact.html'));
}

$contactPage = $config['contact_page'] ?? 'contact.html';
$host = normalizeHost($_SERVER['HTTP_HOST'] ?? $_SERVER['SERVER_NAME'] ?? '');
$name = sanitizeLine($_POST['name'] ?? '');
$email = sanitizeLine($_POST['email'] ?? '');
$phone = sanitizeLine($_POST['phone'] ?? '');
$serviceInterest = sanitizeLine($_POST['service_interest'] ?? '');
$message = sanitizeMessage($_POST['message'] ?? '');
$honeypot = trim((string) ($_POST['website'] ?? ''));

if ($honeypot !== '') {
    redirectTo(buildRedirectUrl($contactPage, 'success'));
}

$validationError = validateSubmission($name, $email, $serviceInterest, $message);

if ($validationError !== null) {
    redirectTo(buildRedirectUrl($contactPage, 'error', $validationError));
}

$recipientEmail = trim((string) ($config['recipient_email'] ?? ''));
$recipientName = trim((string) ($config['recipient_name'] ?? 'DCS Solutions'));
$fromName = trim((string) ($config['from_name'] ?? 'Website Enquiry'));
$configuredFrom = trim((string) ($config['from_email'] ?? ''));
$fromEmail = $configuredFrom !== '' ? $configuredFrom : defaultFromEmail($host);

if ($recipientEmail === '') {
    redirectTo(buildRedirectUrl(
        $contactPage,
        'error',
        'The website contact form is not configured with a recipient email yet.'
    ));
}

$subject = sprintf('New Website Enquiry: %s', $serviceInterest);
$timestamp = gmdate('Y-m-d H:i:s') . ' UTC';
$bodyLines = [
    'New contact enquiry received from the DCS Solutions website.',
    '',
    'Submitted: ' . $timestamp,
    'Name: ' . $name,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Service interest: ' . $serviceInterest,
    'Host: ' . ($host !== '' ? $host : 'Unknown host'),
    '',
    'Message:',
    $message,
];

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    sprintf('From: %s <%s>', formatHeaderName($fromName), $fromEmail),
    sprintf('Reply-To: %s <%s>', formatHeaderName($name), $email),
    'X-Mailer: PHP/' . PHP_VERSION,
];

$mailSent = false;

if (isLocalHost($host)) {
    $logEntry = implode("\n", $bodyLines) . "\n\n" . str_repeat('-', 72) . "\n\n";
    $mailSent = file_put_contents(__DIR__ . '/contact-submissions.log', $logEntry, FILE_APPEND | LOCK_EX) !== false;
} else {
    $mailSent = mail(
        $recipientEmail,
        $subject,
        implode("\n", $bodyLines),
        implode("\r\n", $headers)
    );
}

if (!$mailSent) {
    redirectTo(buildRedirectUrl(
        $contactPage,
        'error',
        'We could not send your enquiry right now. Please try again or contact us by email or WhatsApp.'
    ));
}

redirectTo(buildRedirectUrl($contactPage, 'success'));

function validateSubmission(string $name, string $email, string $serviceInterest, string $message): ?string
{
    if (textLength($name) < 2) {
        return 'Please enter your name before submitting the form.';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        return 'Please enter a valid email address.';
    }

    if ($serviceInterest === '') {
        return 'Please select the service you are interested in.';
    }

    if (textLength($message) < 10) {
        return 'Please add a little more detail to your message before submitting.';
    }

    return null;
}

function sanitizeLine(mixed $value): string
{
    $line = trim((string) $value);
    $line = str_replace(["\r", "\n"], ' ', $line);

    return textSlice($line, 180);
}

function sanitizeMessage(mixed $value): string
{
    $message = trim((string) $value);
    $message = preg_replace("/\r\n?/", "\n", $message) ?? '';

    return textSlice($message, 4000);
}

function formatHeaderName(string $value): string
{
    return str_replace(['<', '>', '"'], '', $value);
}

function normalizeHost(string $host): string
{
    $host = strtolower(trim($host));

    return preg_replace('/:\d+$/', '', $host) ?? '';
}

function isLocalHost(string $host): bool
{
    return $host === '' || $host === 'localhost' || $host === '127.0.0.1' || $host === '::1';
}

function defaultFromEmail(string $host): string
{
    if (isLocalHost($host) || filter_var($host, FILTER_VALIDATE_IP)) {
        return 'noreply@localhost';
    }

    $cleanHost = preg_replace('/^www\./', '', $host) ?? $host;

    return 'noreply@' . $cleanHost;
}

function buildRedirectUrl(string $contactPage, string $status = '', string $message = ''): string
{
    $base = $contactPage !== '' ? $contactPage : 'contact.html';
    $params = [];

    if ($status !== '') {
        $params['status'] = $status;
    }

    if ($message !== '') {
        $params['message'] = $message;
    }

    if ($params === []) {
        return $base . '#contact-form';
    }

    return $base . '?' . http_build_query($params) . '#contact-form';
}

function textLength(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value);
    }

    return strlen($value);
}

function textSlice(string $value, int $limit): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $limit);
    }

    return substr($value, 0, $limit);
}

function redirectTo(string $url): void
{
    header('Location: ' . $url, true, 303);
    exit;
}
