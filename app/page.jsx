import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div >
      <Featured />
      <CategoryList />
      <div className="flex gap-[50px]">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
