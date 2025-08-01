import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const News = () => {
  const [mynews, setMyNews] = useState([]);
  const title = import.meta.env.VITE_APP_APIKEY;
  console.log(title)
  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2025-06-30&sortBy=publishedAt&apiKey=${title}`
      );

      let data = await response.json();
      setMyNews(data.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="bg-blue">

   
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-white font-3xl font-bold text-center mb-6">Explore the Latest Headlines</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mynews.map((article, index) => (
          <div key={index} className="rounded-lg shadow-md bg-gray-200">
            <img
              src={article.urlToImage || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAADWCAMAAADl7J7tAAAAYFBMVEX///94eHh0dHRxcXF1dXWmpqZubm7q6urm5uaSkpK1tbXW1tbKysqioqJ9fX3Z2dm4uLjQ0ND09PS/v7+Tk5Pg4OCLi4uEhIT5+fmsrKzw8PBpaWmIiIjExMSdnZ1lZWXaaf76AAAHgElEQVR4nO2d2WKqMBBAIYlh0aIim4D2///ykpkAAtpSxIDXOU8gmweSySImlkUQBEEQBEEQBEEQBEEQBEEQBEEQBEGsheziL8whNyYbSb40wpStI+3F4RdDsu4aZE8mZcVySZmZlhXRfrsQe58ZlmVfhi52hx0n2ddAsgYh2VdBsgZRsnYaecgme+nFhrJ57Lpu7Oq1TK25cVZvuCUO681hb9d6WZ8k3J78s+/vXGsAyNpCw68vE1UMZc+FqtkUW739W619O9WiX/RqP8XFyrmqfBU7tesFD4Tlk1qWBZwi9qTkrIJLMagFo2xbczQs6+O9DsJmu21LJXvqfq/qm1VeiagW2FntelVVP5vBw9moZRGBtxTtITLpJdSerFhE1uabvuzhnuwZrJJqc6Y/DdRhcA/4oVo6YkuDMVTmvfgAskwlYbagrC2392XZbTK2jvBhUD2vWLefeJVTM9acIUXJs+/hdtnNuBCND5kiWFDW5tk9WXY+1RwqLQc+5E57nHqeeBSvckKM21Xz/IKL/lAWi55lZa/3ZGXcPQE8Q360rFJnTZVTIXGK0mqiLexaStWi6wbctcja8nhHlvdkI4hQvhW2vQC5dYacqHI9ZllRXtzMcmLXyfNuhFqNrPraQ9mdU5ez0HUEMVpcdebVWRXjkypnXPxYcBZEF2d4/fXIVsXInQBVI+EwiEsitb5Ueg5KyNWWbENRxOqzCc7T3XplbblzHhc9DAsnHYsCSM2qJBIlHoQldRiw9hAh014tahWy6RnLvS3/TVYXqbDbfqs02QkKXw/PF175rS67U/QsLmsFAtKn3ZflUlPgYXhXAtgty0WzgtUqxf7KJaurURCjVyd7vOlkvS1nT03vnNt8Xe1RVaS8pm7It+05s61flTv6XJ1H25c9t5xmbwI9lrU2/J5sv+i56WZXX7pN63U/f1U3guImPOi9OkGqJ9uGvyoAltbM/CCb2aNks7TZy61rTJCW1cY8KQObf6Mflk7dpnpf9pbBpV4oa+2bZ/aTrG7taL2s/soCakqhLZrlqj34+5NdTLZNyJ268aEBW6d10w+j81VnWv0DDuZhFMQzF52qRV+2jn7CuGzdZHnQ6uGYqeqUK8Ho2I1DOsxxzz8kWHNMOtfvy+6RWN0zw7KNx932rP7eoV5lEJFynfalPp2HibyqPukG7bhyVrX+Dctijf4XWaxWNGtBZ5uV39agqjrFsXv9pWXhJ71ArwXYTAfZfh9UXTZs4IhCN1TPsCabZmt4LTh0RQjGi6Tf57aw7B4a5nXIdLCdHjYbbtE7ubjmdI64sQp3Gy9N0+TrNOxeXFjWLCRrkezzkKxBSNb6QFk7LTX+w+P/RE92czVC1LTLf5Rtft2T8/yC25NNmRGKcJxszUxprydbCtsEJDuUFVU6htb/B8hiNHbYq2QDM28xfq9C9rgzQvu2wZKyxiFZi2Sf55Nlv7xxYK/3xoum0XanLilbMjEGhp2PHh+195BiFbLJuEqFQNloahVENhckWZJdWjaRE/l+Q1k3nsobys4AyVok+zwkO1bWm1r0rKOngmRJlmQnyh7eQbYsplYX31A2n0r73tf7yM4AyVok+zxPyYaTeUPZZNTOd5BvGI1H7j3kHctZkiXZ/0F23O8HA95S9qOKnhkgWYtkn+cpWWcybyibflLj/bPKWZJ9G9mR71Q0Nai3lo3SceDrLlEwcvc+dvfl6oVkjUOyFsk+zyfLxnsjtKM6LCkbTKz/vWV1cZn/CJAsyc4qm07sQvsj65C9JkZIqbpIsiQ7kU+W3R7NsArZ1FB1cRWyk3uV/kbvPwIkS7KzypbczB/8VyHrb4zQDvtL5axFss9DsgZZUvZ0MIK/ivZsamSYiv44FdQHRbIkOxqnn2eNVBcf5tmm0twODKvmoNDDnz+LGsdVtLW3w9kMTTRWg+bq0ctVqpJ7/bl6/jjSLKS9mWSrK/RG4TVK3KYsHJYfP4YBaXG8VnU7+DyDuGVqCGMe/r7ji1CjWWtDt1BPUw0dG8Io0jp1q3vAB5MtTENlDrn9fb8XgTcb33iD8b6FtAMJL6YwTOuqiS3vTFg1BTXINnvt1FY/oqbR0M8QBzCvkdgrB/NxBDONsu+quyjNTe7bB8bx1qMpuze29eiDqgyaKT5ZmEwWbArApCH1cPuhB1NJCMFtHZZhlgK+f3z834AR0+c73Z+BwNskrf2mDIL02gQk9SjEjLMnqBAhgsUScghhqWxzZXZTNsAA6fJ457CJ7Au42mLFzwlS6t0YiTMfeXNeDUo1ttyzhVcguTeMuDjw/czRM8ECztSk3H1ymC2HsV5pnyfcnjkRw2lTKMVleXztxJmPiHVpE+3b6ztnnOJnpgFwb9C2QgabXTz9zf+p5DssXwVPz8fq+u724HFuv8a1ioB6PkI1s4eRV0i6NFUJwaRUsyvouTPY3GlYc2L92S4WR0jvVUEz3zBupp9iHEwOJ5abEUdNhMXMvAn1M2qq2uvLm2L5zv+6Rr8PMvlKkui6Oe2XKRcIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI4i34B9JQJlkXNfQRAAAAAElFTkSuQmCC"}
              alt={article.title}
              className="object-cover w-full h-40 rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg text-darkblue font-semibold mb-2">{article.author || "Janelle Ash"}</h2>
              <p className="text-black">{article.title}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded-lg text-center"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
   <Footer/>
   </div>
   </>
  );
};

export default News;
