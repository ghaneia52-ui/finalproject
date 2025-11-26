import { El } from "../../utils/el.js";

export function Sidebar() {
    return El({
        element: "div",
        className: "flex flex-col",   
        children: [

            
            El({
                element: "div",
                className: "flex items-center justify-between m-5",
                children: [
                    El({
                        element: "span",
                        innerText: "Running Sportwear",
                        className:"font-extrabold "
                    }),
                    El({
                        element: "img",
                        src: "/src/asset/images/heart-svgrepo-com (1).svg",
                        className: "h-7 ",
                    }),
                ]
            }),

            
            El({
                element: "div",
                className: "text-xs text-gray-500 mt-1 flex gap-5",
                children: [
                    El({ 
                        element: "span",
                         innerText: "5,371 sold" ,
                         className:"bg-blue-100 h-6 w-15 rounded-md ml-5"
                        }),
                    El({ element: "span", innerText: "⭐ 4.3 (5,389 reviews)" })
                ]
            }),
            El({
                element:"div",
                children:[
                    El({
                        element: "span",
                        innerText: "Discription",
                        className:"font-extrabold "
                    }),
                    El({
                        element:"h2",
                        innerText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, incidunt.xfghjklchjkghjkldfghjkl;"
                    })
                ]
            })
        ]
    });
}
