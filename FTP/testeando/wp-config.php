<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'lafarmen_WPWAM');

/** Database username */
define('DB_USER', 'lafarmen_WPWAM');

/** Database password */
define('DB_PASSWORD', 'B&xR^#}Tq2cjUkM2D');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'e668446125ad102b5ccdf3834c6312dbb430cc323dc85137e717803847eb7a5d');
define('SECURE_AUTH_KEY', 'ad0b1335e248642694856b9bdd9459970d9f140a2d3b84bbca126b8411f187e6');
define('LOGGED_IN_KEY', 'facb37f230139f04ff38c0f00a4361bede33e208816202253288f4a973f4d310');
define('NONCE_KEY', 'a432a05c3fa6b7d0f80c3e7325d4c55a2c833e6b6e5cb9a15504c65690ce0560');
define('AUTH_SALT', '56adb80e33e502ff0921b0cc1b2bde02c1fe891cae98561f5f428515d43bf2cc');
define('SECURE_AUTH_SALT', '4d5bc00f59e6864999d7f28ccc3ff7b7add9587d3605dcadc2091b9fa04652e3');
define('LOGGED_IN_SALT', 'bb359655728c1eacaee184f5fdf695be459b793aca3bd8cd4612e6ae4417ad56');
define('NONCE_SALT', '30a736b31d1135efb3f4ed8c0b2f23e6d6b918fc057b9a9d9ad08374b81b2e27');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'nb4_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 20);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
