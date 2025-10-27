import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Avatar } from "@/components/ui/avatar";

const Index = () => {
  const pricingPackages = [
    {
      name: "Стартовый",
      price: "от 500 000 ₽",
      features: ["MVP разработка", "Базовый функционал", "До 5 модулей", "3 месяца поддержки"]
    },
    {
      name: "Бизнес",
      price: "от 1 500 000 ₽",
      features: ["Полный функционал", "До 15 модулей", "Интеграции", "6 месяцев поддержки", "Аналитика"],
      popular: true
    },
    {
      name: "Энтерпрайз",
      price: "от 3 000 000 ₽",
      features: ["Безлимитные модули", "Индивидуальная архитектура", "12 месяцев поддержки", "Dedicated команда", "SLA 99.9%"]
    }
  ];

  const portfolio = [
    {
      title: "Платформа для онлайн-обучения",
      description: "CRM система с видеоконференциями",
      metrics: "50 000+ пользователей"
    },
    {
      title: "Маркетплейс B2B",
      description: "Каталог с интеграцией 1С",
      metrics: "10 000+ товаров"
    },
    {
      title: "Система управления складом",
      description: "WMS с мобильным приложением",
      metrics: "500+ складов"
    }
  ];

  const reviews = [
    {
      author: "Алексей Иванов",
      position: "CEO, TechStart",
      text: "Команда разработала платформу точно в срок. Качество кода на высоте, все работает стабильно.",
      rating: 5
    },
    {
      author: "Мария Петрова",
      position: "CTO, Digital Solutions",
      text: "Отличная работа над интеграциями. Система обрабатывает 10К запросов в минуту без проблем.",
      rating: 5
    },
    {
      author: "Дмитрий Сидоров",
      position: "Founder, StartupHub",
      text: "MVP готов за 2 месяца. Подход к разработке очень гибкий, учитывали все наши пожелания.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-['Open_Sans']">
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        
        <Card className="overflow-hidden border-2 border-secondary/30 shadow-2xl shadow-secondary/10 hover:shadow-secondary/20 transition-all duration-300">
          <div 
            className="h-80 bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.7), rgba(10, 15, 30, 0.85)), url('https://cdn.poehali.dev/projects/daa3d363-1e9a-4ff0-be93-a86b785be154/files/1bb92362-ed88-4cb3-89f6-ced8b332e376.jpg')`
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center border-2 border-primary backdrop-blur-sm">
                  <Icon name="Box" size={48} className="text-primary" />
                </div>
                <h1 className="text-5xl font-bold font-['Montserrat'] text-white">
                  Разработка SaaS-платформ под ключ
                </h1>
                <p className="text-xl text-gray-300">
                  Превращаем идеи в масштабируемые решения
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted/50">
                <TabsTrigger value="description" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="FileText" size={16} className="mr-2" />
                  Описание
                </TabsTrigger>
                <TabsTrigger value="pricing" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="DollarSign" size={16} className="mr-2" />
                  Прайс-лист
                </TabsTrigger>
                <TabsTrigger value="portfolio" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Briefcase" size={16} className="mr-2" />
                  Портфолио
                </TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Icon name="Star" size={16} className="mr-2" />
                  Отзывы
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-3xl font-bold font-['Montserrat'] text-foreground mb-4">
                    Что мы предлагаем
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Создаем SaaS-платформы с нуля: от проектирования архитектуры до запуска в продакшн. 
                    Используем современный стек технологий и лучшие практики разработки.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-lg">
                          <Icon name="Code" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold font-['Montserrat'] mb-2">Разработка</h3>
                          <p className="text-muted-foreground">
                            React, TypeScript, Node.js, PostgreSQL, Redis
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary/20 p-3 rounded-lg">
                          <Icon name="Cloud" size={24} className="text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold font-['Montserrat'] mb-2">Инфраструктура</h3>
                          <p className="text-muted-foreground">
                            AWS, Docker, Kubernetes, CI/CD
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 p-3 rounded-lg">
                          <Icon name="Shield" size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold font-['Montserrat'] mb-2">Безопасность</h3>
                          <p className="text-muted-foreground">
                            OAuth 2.0, SSL, шифрование данных
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="bg-secondary/20 p-3 rounded-lg">
                          <Icon name="Zap" size={24} className="text-secondary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold font-['Montserrat'] mb-2">Производительность</h3>
                          <p className="text-muted-foreground">
                            Оптимизация запросов, кэширование, CDN
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                <h2 className="text-3xl font-bold font-['Montserrat'] text-foreground mb-6">
                  Тарифные планы
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {pricingPackages.map((pkg, idx) => (
                    <Card 
                      key={idx}
                      className={`p-6 relative ${
                        pkg.popular 
                          ? 'border-2 border-primary shadow-lg shadow-primary/20' 
                          : 'border border-border'
                      } hover:scale-105 transition-transform duration-300`}
                    >
                      {pkg.popular && (
                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                          Популярный
                        </Badge>
                      )}
                      <h3 className="text-2xl font-bold font-['Montserrat'] mb-2">{pkg.name}</h3>
                      <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Icon name="Check" size={20} className="text-secondary mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="portfolio" className="space-y-6">
                <h2 className="text-3xl font-bold font-['Montserrat'] text-foreground mb-6">
                  Реализованные проекты
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {portfolio.map((project, idx) => (
                    <Card 
                      key={idx}
                      className="p-6 border border-border hover:border-secondary transition-colors group"
                    >
                      <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon name="Layers" size={48} className="text-primary" />
                      </div>
                      <h3 className="text-xl font-bold font-['Montserrat'] mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-3">{project.description}</p>
                      <Badge variant="outline" className="border-secondary text-secondary">
                        {project.metrics}
                      </Badge>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <h2 className="text-3xl font-bold font-['Montserrat'] text-foreground mb-6">
                  Отзывы клиентов
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {reviews.map((review, idx) => (
                    <Card 
                      key={idx}
                      className="p-6 border border-border hover:border-primary transition-colors"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={20} className="text-primary fill-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border">
                        <Avatar className="w-10 h-10 bg-primary/20 flex items-center justify-center">
                          <Icon name="User" size={20} className="text-primary" />
                        </Avatar>
                        <div>
                          <p className="font-semibold font-['Montserrat']">{review.author}</p>
                          <p className="text-sm text-muted-foreground">{review.position}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>

        <div className="text-center py-8 border-t border-border">
          <p className="text-muted-foreground mb-4">
            Готовы обсудить ваш проект?
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold font-['Montserrat'] transition-all hover:scale-105 shadow-lg shadow-primary/30">
            Связаться с нами
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
