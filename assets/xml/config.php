<?php if(basename(__file__) == 'config.php') exit; ?>
<?xml version="1.0" encoding="utf-8"?>
<xml>
    <Addresses>
        <!-- Enter your e-mail address -->
        <address on="subject" value="Sales">info@teikolandscape.ru</address>
    </Addresses>
    <Config>
        <smtp>
        <!-- smtp gmail config -->
            <use>no</use>
            <auth>yes</auth>
            <secure>tls</secure>
            <host>smtp.beget.com</host>
            <username>info@teikolandscape.ru</username>
            <password>123456</password>
            <port>2525</port>
        </smtp>
        <charset>utf-8</charset>
    </Config>
</xml>
