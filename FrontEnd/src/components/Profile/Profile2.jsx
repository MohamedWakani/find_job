import React, { Component } from "react";

export default class Profile2 extends Component {
  render() {
    return (
      <div>
        <div className="md:my-20 dark:bg-gray-700 bg-stone-400 p-8 rounded grid grid-cols-2 divide-x ">
          <div>
          <ul className="list-disc dark:text-white list-inside mx-16">
            <li className="py-3">
              <span className="font-bold text-blue-600 dark:text-blue-600">Nom</span> : Mohamed
              Khassar
            </li>
            <li className="py-3">
              <span className="font-bold text-blue-600 dark:text-blue-600">Formation</span> : Bac+3
              
            </li>
            <li className="py-3">
              <span className="font-bold text-blue-600 dark:text-blue-600">Nom</span> : Mohamed
              Khassar
            </li>
          </ul>
          </div>
          <div>
          <ul className="dark:text-white list-disc mx-16">
            <li className="py-3">
              <span className="font-bold text-blue-600 dark:text-blue-600">Nom</span> : Mohamed
              Khassar
            </li>
            <li className="py-3">
              <span className="font-bold text-blue-600 dark:text-blue-600">Formation</span> : Bac+3
              
            </li>
            <li className="py-3">
              <span className="font-bold text-blue-600 dark:text-blue-600">Nom</span> : Mohamed
              Khassar
            </li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}
