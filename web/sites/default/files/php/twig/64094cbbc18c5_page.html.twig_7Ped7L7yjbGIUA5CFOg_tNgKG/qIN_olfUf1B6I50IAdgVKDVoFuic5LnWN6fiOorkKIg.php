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
        <a href=\"";
        // line 6
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["base_path"] ?? null), 6, $this->source), "html", null, true);
        echo "\"><img src=\"";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["theme_path"] ?? null), 6, $this->source), "html", null, true);
        echo "/img/l-logo.png\" alt=\"\" class=\"img-fluid\"></a>
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
    <section class=\"breadcrumbs\">
      <div class=\"container\">

        <div class=\"d-flex justify-content-between align-items-center\">
\t\t  ";
        // line 22
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "page_title", [], "any", false, false, true, 22), 22, $this->source), "html", null, true);
        echo "
          ";
        // line 23
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumbs", [], "any", false, false, true, 23), 23, $this->source), "html", null, true);
        echo "
        </div>

      </div>
    </section><!-- End Breadcrumbs -->
\t";
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 28), 28, $this->source), "html", null, true);
        echo "
\t";
        // line 29
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_blocks_1", [], "any", false, false, true, 29), 29, $this->source), "html", null, true);
        echo "
\t";
        // line 30
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_blocks_2", [], "any", false, false, true, 30), 30, $this->source), "html", null, true);
        echo "
\t";
        // line 31
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "bottom_blocks_3", [], "any", false, false, true, 31), 31, $this->source), "html", null, true);
        echo "
    
</main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id=\"footer\" data-aos=\"fade-up\" data-aos-easing=\"ease-in-out\" data-aos-duration=\"500\">

   

    <div class=\"footer-top\">
      <div class=\"container\">
        <div class=\"row\">

          <div class=\"col-lg-3 col-md-6 footer-links\">
            <h4>Our Info</h4>
            ";
        // line 46
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["page"] ?? null), "main_navigation", [], "any", false, false, true, 46), 46, $this->source), "html", null, true);
        echo "
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
           <img class=\"duns\" src=\"";
        // line 62
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["theme_path"] ?? null), 62, $this->source), "html", null, true);
        echo "/img/duns-logo.png\">
            <p>We are DUNS verified company. Registration No.- 075532377</p>
          </div>

        </div>
      </div>
    </div>

    <div class=\"container\">
      <div class=\"copyright\">
        &copy; Copyright 2023 All Rights Reserved <a class=\"link\" href=\"/\">Executive Luxury Service Inc.</a>
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
        return array (  131 => 62,  112 => 46,  94 => 31,  90 => 30,  86 => 29,  82 => 28,  74 => 23,  70 => 22,  55 => 10,  46 => 6,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/els_theme/templates/system/page.html.twig", "C:\\xampp\\htdocs\\els\\web\\themes\\custom\\els_theme\\templates\\system\\page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array();
        static $filters = array("escape" => 6);
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
