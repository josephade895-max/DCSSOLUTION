# DCS Solutions cPanel Deployment

This website is ready to upload to a standard cPanel hosting account such as Upperlink.

## Files to upload

Upload the full contents of this project into your site document root:

- `index.html`
- `about.html`
- `services.html`
- `tech.html`
- `media.html`
- `marketing.html`
- `travel.html`
- `contact.html`
- `contact-submit.php`
- `contact-config.php`
- `assets/`
- `css/`
- `js/`

For the main domain, this is usually `public_html/`.

## Contact form setup

The contact form now submits to `contact-submit.php`.

Edit [contact-config.php](/Users/admin/Documents/dcs-global-website/contact-config.php) before or after upload if you want to change:

- recipient email
- recipient name
- optional sender email

Current recipient:

- `dcsgroups01@gmail.com`

Recommended live sender email:

- create a domain mailbox in cPanel such as `noreply@yourdomain.com`
- place that address in `from_email` inside `contact-config.php`

Example:

```php
'from_email' => 'noreply@yourdomain.com',
```

## Upperlink / cPanel steps

1. Log in to your Upperlink cPanel account.
2. Open `File Manager`.
3. Go to `public_html` or your addon-domain document root.
4. Upload all project files and folders there.
5. Make sure `contact-submit.php` and `contact-config.php` are in the same root level as `contact.html`.
6. If you already have old site files, back them up first, then replace them with the new ones.
7. In cPanel, create a mailbox like `noreply@yourdomain.com` if you want stronger mail reliability.
8. Update `contact-config.php` to use that mailbox as `from_email`.
9. Visit `https://yourdomain.com/contact.html` and submit a real test enquiry.

## Notes about local development

The contact form requires PHP to execute. A plain static server such as `python3 -m http.server` will not process `contact-submit.php`.

When this site runs on `localhost` or `127.0.0.1` through a PHP-capable server, the handler writes submissions to:

- `contact-submissions.log`

That helps you test locally without requiring a live mail server.

## If the form does not send on hosting

Check these items:

1. PHP is enabled on the hosting account.
2. `contact-submit.php` is inside the live document root.
3. `from_email` uses a mailbox on your live domain.
4. Your hosting account allows PHP `mail()`.
5. The domain DNS is correctly pointing to the Upperlink hosting account.

## Recommended final check

After upload, test:

1. Homepage loads.
2. Navigation works across all pages.
3. Images display correctly.
4. WhatsApp button opens.
5. Contact form sends and you receive the email.
