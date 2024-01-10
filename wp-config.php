<?php
/**
 * A configuração de base do WordPress
 *
 * Este ficheiro define os seguintes parâmetros: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, e ABSPATH. Pode obter mais informação
 * visitando {@link https://wordpress.org/support/article/editing-wp-config-php/ Editing
 * wp-config.php} no Codex. As definições de MySQL são-lhe fornecidas pelo seu serviço de alojamento.
 *
 * Este ficheiro contém as seguintes configurações:
 *
 * * Configurações de  MySQL
 * * Chaves secretas
 * * Prefixo das tabelas da base de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Definições de MySQL - obtenha estes dados do seu serviço de alojamento** //
/** O nome da base de dados do WordPress */
define( 'DB_NAME', 'portfolio' );

/** O nome do utilizador de MySQL */
define( 'DB_USER', 'root' );

/** A password do utilizador de MySQL  */
define( 'DB_PASSWORD', '' );

/** O nome do serviddor de  MySQL  */
define( 'DB_HOST', 'localhost' );

/** O "Database Charset" a usar na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O "Database Collate type". Se tem dúvidas não mude. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação.
 *
 * Mude para frases únicas e diferentes!
 * Pode gerar frases automáticamente em {@link https://api.wordpress.org/secret-key/1.1/salt/ Serviço de chaves secretas de WordPress.org}
 * Pode mudar estes valores em qualquer altura para invalidar todos os cookies existentes o que terá como resultado obrigar todos os utilizadores a voltarem a fazer login
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY', ',C EwT7)R:^`bL~@Z~R6^|uKsS%-3V#EnKP&XD3V].~XQ34+w5Kg*:B~K`Fog74 ' );
define( 'SECURE_AUTH_KEY', '&rra{L[S]o?bLPsoB)^lg0>@qh} zJvoBTI2$nstsY<4jI.AXp^ {aV}:6*uAJI6' );
define( 'LOGGED_IN_KEY', 'x+ IJLaG(`)Gh&Wui*{qs$0x{UDtP%[wxW:FYlRrkTU2_hst;TuA]h<0u9Hoij4%' );
define( 'NONCE_KEY', 'aU$;F6wg:,ru*rJFL7jEiY[9&<Ni*LiIk+Il!]ivFF@ET]H!$~ljt_+Rrrv,KEW<' );
define( 'AUTH_SALT', '~oij{:??^i6&Yy6}r/OcCXvEGFlf&p01M7pRffgditZ<^#of *t/*}^DmW@]wF@H' );
define( 'SECURE_AUTH_SALT', 'Vapn7prAp1Rk,V7epSt[2-R[1TvtSy#P(9>C&C .LQ|If|#STHth/S}LoDQ{PWoK' );
define( 'LOGGED_IN_SALT', 'L:{6<FT|1;h>KD~uw9W`wU6U=R~g?D/Yw4 Lf+}h}6LV=Do|SBuo>`[Sp9m{0Lh-' );
define( 'NONCE_SALT', 'voD2Fr73Kw7]|Z?M5>IIO82>&oYI5m0-M[T95hIMaUifx];reV|aofX<c)zvVr-d' );

/**#@-*/

/**
 * Prefixo das tabelas de WordPress.
 *
 * Pode suportar múltiplas instalações numa só base de dados, ao dar a cada
 * instalação um prefixo único. Só algarismos, letras e underscores, por favor!
 */
$table_prefix = 'wp_';

/**
 * Para developers: WordPress em modo debugging.
 *
 * Mude isto para true para mostrar avisos enquanto estiver a testar.
 * É vivamente recomendado aos autores de temas e plugins usarem WP_DEBUG
 * no seu ambiente de desenvolvimento.
 *
 * Para mais informações sobre outras constantes que pode usar para debugging,
 * visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* E é tudo. Pare de editar! */

/** Caminho absoluto para a pasta do WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Define as variáveis do WordPress e ficheiros a incluir. */
require_once ABSPATH . 'wp-settings.php';
