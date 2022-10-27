import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import debounce from '../../utils/debounce';

import style from './Search.module.scss';
import SearchItem from './SearchItem';

export interface IDogItem {
  _id: number;
  SKU: number;
  images: string[];
  age: string;
  size: string;
  color: string;
  vaccinated: string;
  dewormed: string;
  cert: string;
  microchip: string;
  location: string;
  published: string;
  additionalInfo: string;
  title: string;
  price: number;
  gene: string;
}

interface SearchProps {
  className?: string;
  placeHolder?: string;
}

const Search: React.FC<SearchProps> = ({ className, placeHolder }) => {
  const router = useRouter();

  const [query, setQuery] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isVisible, setIsVisible] = React.useState(false);
  const [searchedItems, setSearchedItems] = React.useState<IDogItem[]>([]);

  const debounced = React.useCallback(
    debounce((query: string) => {
      fetchSearchedItems(query);
    }, 750),
    []
  );

  async function fetchSearchedItems(query: string) {
    if (!query) return setSearchedItems([]);
    const response = await fetch(
      `https://6358307cc26aac906f3dda7a.mockapi.io/dogs?title=${query}`
    ).then((resp) => resp.json());
    setSearchedItems(response);
    setLoading(false);
  }

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setQuery(event.target.value);
    debounced(event.target.value);
  };

  React.useEffect(() => {
    const windowClick = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !event.composedPath().includes(searchRef.current)
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener('click', windowClick);
    return () => {
      window.removeEventListener('click', windowClick);
    };
  }, []);

  React.useEffect(() => {
    setIsVisible(false);
  }, [router]);

  const onClickSearch = () => {
    inputRef.current?.focus();
    setIsVisible(true);
  };

  const inputRef = React.useRef<HTMLInputElement>(null);
  const searchRef = React.useRef<HTMLInputElement>(null);

  return (
    <>
      <div
        onClick={onClickSearch}
        ref={searchRef}
        className={`${style.search} ${className ? className : ''}`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.0916 16.9083L15 13.8417C16.2001 12.3454 16.7812 10.4461 16.624 8.53443C16.4667 6.62276 15.583 4.844 14.1546 3.56388C12.7261 2.28377 10.8615 1.5996 8.94408 1.65207C7.02668 1.70454 5.20225 2.48965 3.84593 3.84596C2.48962 5.20228 1.70451 7.02671 1.65204 8.94411C1.59957 10.8615 2.28374 12.7262 3.56385 14.1546C4.84397 15.5831 6.62273 16.4668 8.5344 16.624C10.4461 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C16.9858 18.1448 17.078 18.2068 17.1795 18.2491C17.281 18.2914 17.39 18.3132 17.5 18.3132C17.61 18.3132 17.7189 18.2914 17.8205 18.2491C17.922 18.2068 18.0142 18.1448 18.0916 18.0667C18.2418 17.9113 18.3258 17.7036 18.3258 17.4875C18.3258 17.2714 18.2418 17.0637 18.0916 16.9083ZM9.16665 15C8.01292 15 6.88511 14.6579 5.92582 14.0169C4.96653 13.3759 4.21886 12.4649 3.77735 11.399C3.33584 10.3331 3.22032 9.16021 3.4454 8.02865C3.67048 6.8971 4.22605 5.8577 5.04186 5.04189C5.85766 4.22608 6.89707 3.67051 8.02862 3.44543C9.16018 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2914 13.2915C12.1975 14.3854 10.7137 15 9.16665 15Z"
            fill="#667479"
          />
        </svg>
        <input
          type="text"
          ref={inputRef}
          placeholder={placeHolder ? placeHolder : 'Search something here!'}
          value={query}
          onChange={onChangeSearch}
        />
        {isVisible &&
          query &&
          (loading ? (
            <span className={`${style.loading}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  fill="none"
                  stroke="#003459"
                  strokeWidth="10"
                  r="35"
                  strokeDasharray="164.93361431346415 56.97787143782138"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                  />
                </circle>
              </svg>
            </span>
          ) : (
            <div className={`${style.dropDown}`}>
              <ul className={`${style.dropDownList}`}>
                {searchedItems.length > 0 ? (
                  searchedItems.slice(0, 4).map((item) => (
                    <SearchItem
                      key={item._id}
                      SKU={item.SKU}
                      image={item.images[0]}
                      title={item.title}
                      price={item.price}
                      description={[
                        ['Gene', item.gene],
                        ['Age', item.age],
                      ]}
                    />
                  ))
                ) : (
                  <p className={`${style.notFound}`}>
                    There is nothing found for your query...
                  </p>
                )}
              </ul>
              {searchedItems.length > 4 && (
                <Link href={'/dogs?search=' + query}>
                  <a className={`${style.seeAll}`}>See all...</a>
                </Link>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default Search;
