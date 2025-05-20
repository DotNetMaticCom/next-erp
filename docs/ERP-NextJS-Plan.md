# Next.js ERP Teknik Plan

Bu belge, `@/next-erp` projesinin .NET ekosistemi ile entegre olacak sekilde yeniden yapılandırılması için kapsamlı bir rehber sunar. Plan, ölçeklenebilir ve modüler bir mimariyi, güvenli API entegrasyonunu ve kurumsal ihtiyaçlara yönelik en iyi pratikleri kapsamaktadır.

## 1. Proje Mimarisi ve Klasör Yapısı

- **Alan/Özellik Tabanlı Dizayn**: `src/modules` altında her iş alanı için (örn. `users`, `inventory`, `sales`) ayrı klasörler oluşturun. Her modül aşağıdaki alt klasörleri içerebilir:
  - `components/`: Sadece o alana ait bileşenler.
  - `pages/` veya `routes/`: İlgili sayfalar ve dinamik route dosyaları.
  - `hooks/`: Özel React hook'ları ve state yönetimi mantığı.
  - `services/`: API çağrıları ve .NET backend entegrasyonu.
  - `store/`: Zustand veya Redux Toolkit dosyaları (varsa).
- **Ortak Kaynaklar**: `src/lib` altında yardımcı fonksiyonlar, API istemcileri, tip tanımları ve konfigürasyonlar tutulmalı.
- **Görsel Bileşenler**: `src/components/ui` klasörü altında shadcn/ui veya seçilen diğer UI kütüphanesinden türetilmiş yeniden kullanılabilir bileşenler konumlandırılmalı.
- **Tema ve Stil**: `src/themes` içerisinde tema tanımları, Tailwind yapılandırmaları ve stil yardımcıları bulundurulmalı.

## 2. State Yönetimi

- **Sunucu State'i**: `@tanstack/react-query` (TanStack Query) kullanılmalı. Global `QueryClient` `src/app/providers.tsx` içerisinde tanımlanarak uygulama genelinde kullanılabilir.
- **Client/UI State'i**: Basit ve modüler yönetim için [Zustand](https://github.com/pmndrs/zustand) tercih edilebilir. Daha karmaşık durumlarda Redux Toolkit kullanılabilir.
- **Entegrasyon**: React Query üzerinden gelen veriler, ihtiyaç halinde Zustand/Redux store'u ile senkronize edilebilir. Önbellek stratejileri, sorgu invalidasyonu ve background fetch ayarları proje gereksinimlerine göre yapılandırılmalı.

## 3. .NET Backend ile API İletişimi

- **BFF Yaklaşımı**: Güvenlik ve cross-origin kısıtlamaları için Next.js API Routes BFF olarak kullanılabilir. Bu katman .NET servislerine HTTP istekleri yaparak istemciye yanıt döner.
- **Doğrudan İstemci Çağrıları**: Yetkilendirilmiş token taşıyan istekler için istemci tarafında axios/fetch kullanılarak doğrudan .NET API'lerine çağrı yapılabilir. İstekler React Query ile sarmalanmalı.
- **Hata Yönetimi**: HTTP hataları, 401/403 durum kodları dahil olmak üzere merkezi bir error handler üzerinden ele alınmalı. React Query `onError` fonksiyonları ve global toast bildirimleri kullanılabilir.
- **Token Yönetimi**: JWT veya benzeri token'lar `httpOnly` cookie'ler veya güvenli storage mekanizmaları ile saklanmalı. Refresh token mekanizması backend'de uygulanmalı.

## 4. Kimlik Doğrulama ve Yetkilendirme

- **NextAuth.js Kullanımı**: `pages/api/auth/[...nextauth].ts` dosyasında NextAuth konfigürasyonu yapılmalı. .NET backend'deki oturum ve kullanıcı servisleriyle entegre olarak kimlik doğrulama sağlanmalı.
- **Rol Tabanlı Yetkilendirme (RBAC)**: Kullanıcı rolleri oturum bilgisine eklenerek client tarafında route bazlı kontroller (örn. yüksek yetkili sayfalar) yapılmalı. Sunucu tarafında da yetki kontrolleri zorunlu.
- **Korumalı Route'lar**: App Router kullanılarak `middleware.ts` veya `layout.tsx` içerisinde oturum kontrolü yaparak erişim kısıtlaması uygulanabilir.

## 5. Routing Stratejisi

- **Dinamik ve İç İçe Geçmiş Route'lar**: Next.js 13+ App Router yapısı ile `app/(dashboard)/users/[id]/edit/page.tsx` gibi çok katmanlı route'lar tanımlanabilir.
- **Modül Bazlı Navigasyon**: Her modül kendi `pages.ts` veya `routes.ts` tanımı ile navigasyon menüsüne entegre olabilir.
- **Lazy Loading**: `next/dynamic` kullanarak büyük modülleri veya bileşenleri gerektiğinde yükleyin. Navigasyonda `suspense` ile birlikte kullanılabilir.

## 6. UI Bileşen Kütüphanesi ve Temalama

- **Kütüphane Seçimi**: kurumsal projeler için erişilebilirliği yüksek olan [shadcn/ui](https://ui.shadcn.com) veya Material UI/Ant Design tercih edilebilir.
- **Tailwind Entegrasyonu**: Proje hâlihazırda Tailwind kullanıyor. Temalar `tailwind.config.ts` ve `src/themes` üzerinden yönetilmeli.
- **Özelleştirme**: Tema renkleri, yazı tipleri ve bileşen varyantları Cva (class-variance-authority) ile oluşturulabilir.

## 7. Form Yönetimi ve Doğrulama

- **React Hook Form**: Karmaşık form senaryoları için performanslıdır.
- **Şema Tabanlı Validasyon**: `zod` ya da `yup` kullanarak form şemaları tanımlayın. React Hook Form'un `resolver` özelliğiyle bütünleştirin.
- **Dinamik Formlar**: Alan bazlı validasyon ve koşullu alanlar için controlled komponentler kullanılmalı.

## 8. Uluslararasılaştırma (i18n) ve Yerelleştirme (l10n)

- Next.js'in yerleşik i18n desteği `next.config.mjs` üzerinden etkinleştirilebilir. `next-intl` veya `next-i18next` paketleriyle çeviri dosyaları yönetilebilir.
- Dil dosyaları `public/locales/{lang}` altında tutulabilir. Lazy loading ile yalnızca gereken çeviriler yüklenmeli.

## 9. Performans Optimizasyonu

- **Render Stratejileri**: SSR, SSG ve ISR arasında sayfa bazında seçim yapın. Ürün listeleri gibi sık güncellenen veriler için ISR kullanmak uygun olabilir.
- **Kod Bölme ve Lazy Loading**: `next/dynamic` ile bileşenleri parçalayın. Route bazlı chunk'lar oluşturmak için dizin yapısını modüllere göre kurgulayın.
- **Bundle Analizi**: `next build` sonrasında `next build --profile` veya `next build && next export` ile analiz yapın. Gereksiz bağımlılıkları budayın.

## 10. Test Stratejisi

- **Birim Testleri**: Jest ve React Testing Library ile bileşen ve yardımcı fonksiyonları test edin.
- **Entegrasyon Testleri**: API katmanı ve state yönetimi modülleri için Jest üzerinde mock server veya MSW kullanılabilir.
- **E2E Testleri**: Playwright veya Cypress ile kritik kullanıcı akışlarını test edin. CI ortamında çalıştırmak için Docker konfigürasyonları ekleyin.

## 11. Geliştirme Ortamı

- **TypeScript**: `tsconfig.json`'da path alias ayarları (örn. `@/*`) yapılmalı. Sıkı tip kontrolü için `strict` mod açık tutulmalı.
- **ESLint & Prettier**: `eslint.config.mjs` ve `.prettierrc` ile kod standardı belirlenmeli. `npm run lint` komutu CI aşamasında otomatik çalıştırılmalı.
- **Ortam Değişkenleri**: `env.local`, `env.development`, `env.production` dosyalarıyla güvenli bir yönetim sağlanmalı.
- **Debugging**: VS Code debug yapılandırmaları, Source Map desteği ve React Developer Tools kullanılabilir.

## 12. Build ve CI/CD

- **Optimize Build**: `next build` sürecinde otomatik lint ve test adımları çalıştırın. Production build için çevresel değişkenlerin doğru ayarlandığından emin olun.
- **CI/CD Pipeline**: GitHub Actions veya Azure DevOps üzerinde, `lint -> test -> build -> deploy` adımlarını içeren bir pipeline oluşturun. Docker imajı hazırlanıp Kubernetes veya Vercel üzerinde dağıtım yapılabilir.

## 13. Uzun Vadeli Bakım ve Modüler Tasarım

- **Bağımsız Modüller**: Her modülün kendi bağımlılıklarını yönetmesini sağlayın. Ortak kodları `src/lib` altında paylaşın.
- **Versiyonlama ve Dokümantasyon**: API sözleşmeleri için OpenAPI/Swagger dökümanları, UI bileşenleri için Storybook gibi araçlar kullanılabilir.
- **Refactoring Prensipleri**: SOLID, DRY ve KISS prensiplerine uygun hareket edin.

## 14. Gerçek Zamanlı İletişim

- **SignalR Entegrasyonu**: .NET backend, SignalR hub'ları aracılığıyla gerçek zamanlı veri aktarımı sunabilir. Next.js içinde bu yapıya `@microsoft/signalr` paketiyle bağlanın.
- **Sunucu Tarafı**: API Routes üzerinden proxy yapmak veya doğrudan istemci bağlantısı kurmak mümkündür. İhtiyaca göre Socket context'i oluşturulabilir.

## 15. Hata Yakalama ve Loglama

- **Merkezi Hata Yakalama**: `error.tsx` veya global `ErrorBoundary` bileşenleri kullanın.
- **Sentry Entegrasyonu**: `@sentry/nextjs` ile hem istemci hem sunucu tarafında hataları yakalayıp merkezi olarak raporlayın. Ortam değişkenleri üzerinden DSN konfigurasyonu yapılmalı.
- **Loglama**: Önemli kullanıcı aksiyonlarını ve hata detaylarını Sentry veya başka bir log servisinde toplayın.

Bu teknik plan, `@/next-erp` projesinin .NET tabanlı ERP sistemine sağlam, güvenilir ve ölçeklenebilir bir frontend sunabilmesi için izlenecek adımları ve en iyi pratikleri özetlemektedir.
