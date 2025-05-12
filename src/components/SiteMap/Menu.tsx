import { TiHome } from "react-icons/ti";
import { MenuItem, MenuSectionType, menuData, secondRowMenuData } from "./Data";

const MenuHeader = () => (
  <div className="flex items-center gap-3 border-b border-[#E0E2EB] py-4 px-4 sm:px-8">
    <TiHome size={24} className="text-[#769D96]" />
    <p className="text-base font-bold">사이트맵</p>
  </div>
);

const MenuTitle = () => <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">사이트맵</p>;

const MenuCategory = ({ title, items = [] }: MenuItem) => (
  <>
    <p className="text-base md:text-lg font-semibold text-secondary px-4 pb-2 pt-5">
      {title}
    </p>
    {items.length > 0 && (
      <ul className="text-text-400 text-sm md:text-base">
        {items.map((item, index) => (
          <li
            key={`${title}-${index}`}
            className="px-4 py-1.5 md:py-2 hover:text-secondary transition-colors duration-500 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    )}
  </>
);

const MenuSection = ({ title, categories }: MenuSectionType) => (
  <div>
    <p className="text-base md:text-lg font-semibold text-primary text-center border-b-2 border-secondary">
      {title}
    </p>
    {categories.map((category, index) => (
      <MenuCategory
        key={`${title}-category-${index}`}
        title={category.title}
        items={category.items}
      />
    ))}
    <div className="border-b border-[#E0E2EB] mt-4" />
  </div>
);

export default function Menu() {
  return (
    <div className="site-map">
      <div className="site-map-container">
        <MenuHeader />

        <div className="py-6 md:py-10 lg:py-14 px-4 md:pl-8 lg:pl-14">
          <MenuTitle />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-10">
            {menuData.map((section, index) => (
              <MenuSection
                key={`section-${index}`}
                title={section.title}
                categories={section.categories}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-10">
            {secondRowMenuData.map((section, index) => (
              <MenuSection
                key={`section-row2-${index}`}
                title={section.title}
                categories={section.categories}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
