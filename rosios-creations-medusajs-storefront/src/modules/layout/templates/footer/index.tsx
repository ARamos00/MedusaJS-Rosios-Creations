import { Text, clx } from "@medusajs/ui";
import { getCategoriesList, getCollectionsList } from "@lib/data";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  return (
    <footer className="border-t border-grey-dark w-full bg-blush-light">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between py-40">
          <div>
            <LocalizedClientLink
              href="/"
              className="text-2xl font-bold text-blush-dark hover:text-blush uppercase"
            >
              Rosio's Creations
            </LocalizedClientLink>
          </div>
          <div className="text-small-regular gap-10 md:gap-x-16 grid grid-cols-2 sm:grid-cols-3">
            {product_categories && product_categories.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="font-semibold text-blush-dark">Categories</span>
                <ul className="grid grid-cols-1 gap-2" data-testid="footer-categories">
                  {product_categories.slice(0, 6).map((c) => {
                    if (c.parent_category) {
                      return;
                    }

                    const children =
                      c.category_children?.map((child) => ({
                        name: child.name,
                        handle: child.handle,
                        id: child.id,
                      })) || null;

                    return (
                      <li
                        className="flex flex-col gap-2 text-grey-darkest"
                        key={c.id}
                      >
                        <LocalizedClientLink
                          className={clx(
                            "hover:text-blush",
                            children && "font-semibold"
                          )}
                          href={`/categories/${c.handle}`}
                          data-testid="category-link"
                        >
                          {c.name}
                        </LocalizedClientLink>
                        {children && (
                          <ul className="grid grid-cols-1 ml-3 gap-2">
                            {children.map((child) => (
                              <li key={child.id}>
                                <LocalizedClientLink
                                  className="hover:text-blush"
                                  href={`/categories/${child.handle}`}
                                  data-testid="category-link"
                                >
                                  {child.name}
                                </LocalizedClientLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-2">
                <span className="font-semibold text-blush-dark">Collections</span>
                <ul
                  className={clx(
                    "grid grid-cols-1 gap-2 text-grey-darkest",
                    {
                      "grid-cols-2": collections.length > 3,
                    }
                  )}
                >
                  {collections.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-blush"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="flex flex-col gap-y-2">
              <span className="font-semibold text-blush-dark">Rosio's Creations</span>
              <ul className="grid grid-cols-1 gap-y-2 text-grey-darkest">
                <li>
                  <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blush"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://your-documentation-link"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blush"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/your-source-code-link"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blush"
                  >
                    Source code
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-16 justify-between text-grey-dark">
          <Text className="text-sm">
            © {new Date().getFullYear()} Rosio's Creations. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  );
}
