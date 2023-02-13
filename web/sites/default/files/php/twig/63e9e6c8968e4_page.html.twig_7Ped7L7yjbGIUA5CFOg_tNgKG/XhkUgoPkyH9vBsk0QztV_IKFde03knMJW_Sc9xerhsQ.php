<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/custom/els_theme/templates/system/page.html.twig */
class __TwigTemplate_f8d782bb8c167e3f204a8a065bb655d6854f56dd98137d7a9f9f1149f8076ac2 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<!-- ======= Header ======= -->
  <header id=\"header\" class=\"fixed-top d-flex align-items-center \">
    <div class=\"container d-flex justify-content-between align-items-center\">

      <div class=\"logo\">
        <a href=\"index.html\"><img src=\"assets/img/l-logo.png\" alt=\"\" class=\"img-fluid\"></a>
      </div>

      <nav id=\"navbar\" class=\"navbar\">
        ";
        // line 10
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_navigation", [], "any", false, false, true, 10), 10, $this->source), "html", null, true);
        echo "
        <i class=\"bi bi-list mobile-nav-toggle\"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <main id=\"main\">

    <!-- ======= About Us Section ======= -->
    <section class=\"breadcrumbs\">
      <div class=\"container\">

        <div class=\"d-flex justify-content-between align-items-center\">
          ";
        // line 24
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumbs", [], "any", false, false, true, 24), 24, $this->source), "html", null, true);
        echo "
        </div>

      </div>
    </section><!-- End About Us Section -->

    <!-- ======= About Section ======= -->
    <section class=\"about\" data-aos=\"fade-up\">
      <div class=\"container\">
\t\t
        <div class=\"row\">
\t\t\t
        </div>

      </div>
    </section><!-- End About Section -->
\t
\t<section class=\"facts section-bg\" data-aos=\"fade-up\">
\t\t<div class=\"container\">
\t\t\t<div class=\"row\">
\t\t\t\t<div class=\"col-lg-6 dun_brad\">
\t\t\t\t\t<img src=\"assets/img/duns-logo.png\" class=\"img-fluid\" alt=\"\">
\t\t\t\t</div>
\t\t\t\t<div class=\"seperator\" >&nbsp;</div>
\t\t\t\t<div class=\"col-lg-6 d-flex flex-column justify-content-center p-5 dun_brad_desc\">
\t\t\t\t\t<div class=\"icon-box\">
\t\t\t\t\t\t<h4 class=\"title\"><a href=\"\">DUN & BRADSTREET</a></h4>
\t\t\t\t\t\t<p class=\"description\">We are excited to announce that we are DUNS verified company. We have been registered under the registration number <b style=\"font-style: italic;\">075532377</b>. Dun & Bradstreet a leading global provider of business decisioning data and analytics for almost 200 years. Decisions that lead to more intelligent actions.</p>
\t\t\t\t\t</div>
\t\t\t\t</div>
\t\t\t</div>
\t\t</div>
\t</section>

    <!-- ======= Our Skills Section ======= -->
    <section class=\"skills\" data-aos=\"fade-up\">
      <div class=\"container\">

        <p>We maintain a constant focus on high standards of safety. Our toment safe chauffeurs go through a thorough vetting process including state licensing, registration, and background checks.
Executive luxury service Inc. The name speaks for itself. We provide a concierge service experience; having well maintained best premium executive based luxury cars for our high end customers. Like Mercedes, Audi, BMW, Lincoln Navigator, Cadillac Escalade, Volvo, Lexus. And an average we replace our vehicles every 4 years with a new one. We are reliable choice, because your safety and comfort is our first priority.</p>

      </div>
    </section><!-- End Our Skills Section -->
</main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id=\"footer\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-duration=\"500\">

   

    <div class=\"footer-top\">
      <div class=\"container\">
        <div class=\"row\">

          <div class=\"col-lg-3 col-md-6 footer-links\">
            <h4>Our Info</h4>
            <ul>
              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Home</a></li>
              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">About us</a></li>
              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Our Services</a></li>
              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Online Reservation</a></li>
              <li><i class=\"bx bx-chevron-right\"></i> <a href=\"#\">Contact Concierge</a></li>
            </ul>
          </div>

          <div class=\"col-lg-3 col-md-6 footer-contact\">
            <h4>Contact Us</h4>
            <p>
              14 Van Siclen Avenue <br>
              Floral Park, New York, NY 11001<br>
              United States <br><br>
              <strong>Phone:</strong> +1 929 919 3901 <br>
              <strong>Email:</strong> info@exeluxserv.com<br>
            </p>

          </div>

          <div class=\"col-lg-3 col-md-6 footer-info\">
           <img class=\"duns\" src=\"assets/img/duns-logo.png\">
            <p>We are DUNS verified company. Registration No.- 075532377</p>
          </div>

        </div>
      </div>
    </div>

    <div class=\"container\">
      <div class=\"copyright\">
        &copy; Copyright 2023 All Rights Reserved <a class=\"link\" href=\"index.html\">exeluxserv.com</a>
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href=\"#\" class=\"back-to-top d-flex align-items-center justify-content-center\"><i class=\"bi bi-arrow-up-short\"></i></a>";
    }

    public function getTemplateName()
    {
        return "themes/custom/els_theme/templates/system/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  67 => 24,  50 => 10,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/els_theme/templates/system/page.html.twig", "C:\\xampp\\htdocs\\els\\web\\themes\\custom\\els_theme\\templates\\system\\page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 10);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
