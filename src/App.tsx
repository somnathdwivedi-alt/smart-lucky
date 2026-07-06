import Categories from "./components/Categories";
import { BestDeals, ComparePlatforms } from "./components/Deals";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { AffiliatePrograms, TrendingOffers } from "./components/Offers";
import { ProductOffers } from "./components/ProductOffers";
import { AdPlatforms, MarketingTools } from "./components/Platforms";
import ReviewsNews from "./components/ReviewsNews";
import { Footer, Newsletter } from "./components/NewsletterFooter";
import { MouseGlow } from "./components/ui";
import { useRoute } from "./router";
import AffiliateDetail from "./pages/AffiliateDetail";
import CategoryListing from "./pages/CategoryListing";
import Compare from "./pages/Compare";
import Dashboard from "./pages/Dashboard";
import DealDetail from "./pages/DealDetail";
import DealListing from "./pages/DealListing";
import NewsDetail from "./pages/NewsDetail";
import NewsListing from "./pages/NewsListing";
import Profile from "./pages/Profile";
import ReviewDetail from "./pages/ReviewDetail";
import ReviewListing from "./pages/ReviewListing";
import SearchResults from "./pages/SearchResults";
import ProductDetail from "./pages/ProductDetail";
import ToolDetail from "./pages/ToolDetail";
import ToolListing from "./pages/ToolListing";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <TrendingOffers />
      <ProductOffers />
      <AffiliatePrograms />
      <AdPlatforms />
      <MarketingTools />
      <BestDeals />
      <ComparePlatforms />
      <ReviewsNews />
      <Newsletter />
    </>
  );
}

const PAGES: Record<string, React.ComponentType<{ id?: string }>> = {
  home: Home as React.ComponentType<{ id?: string }>,
  deals: DealListing as React.ComponentType<{ id?: string }>,
  deal: DealDetail,
  tool: ToolDetail,
  product: ProductDetail,
  affiliate: AffiliateDetail,
  category: CategoryListing,
  compare: Compare,
  reviews: ReviewListing as React.ComponentType<{ id?: string }>,
  review: ReviewDetail,
  blog: NewsListing as React.ComponentType<{ id?: string }>,
  news: NewsDetail,
  tools: ToolListing as React.ComponentType<{ id?: string }>,
  search: SearchResults,
  dashboard: Dashboard,
  profile: Profile,
};

export default function App() {
  const { route, id } = useRoute();
  const Page = PAGES[route] ?? Home;

  return (
    <div className="min-h-screen bg-primary">
      <MouseGlow />
      <Navbar />
      <main key={route + (id ?? "")}>
        <Page id={id} />
      </main>
      <Footer />
    </div>
  );
}
