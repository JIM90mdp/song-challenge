from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "web-app/index.html"


class AboutPageView(TemplateView):
    template_name = "pages/about.html"
