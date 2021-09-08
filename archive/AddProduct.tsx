/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { CreditCardIcon, KeyIcon, UserCircleIcon, UserGroupIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import React from 'react'

const navigation = [
    { name: 'Account', href: '#', icon: UserCircleIcon, current: true },
    { name: 'Password', href: '#', icon: KeyIcon, current: false },
    { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: false },
    { name: 'Team', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
]

const products = [
    {
        id: 1,
        name: 'Fusion',
        category: 'Image #1',
        href: '#',
        price: '$49',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
        imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 2,
        name: 'Fusion',
        category: 'Image #2',
        href: '#',
        price: '$49',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ba920a58-39f8-4b78-872d-84b3f70913e6/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
        imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 1,
        name: 'Fusion',
        category: 'Image #3',
        href: '#',
        price: '$49',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a810a2f0-acac-4518-89b2-7f33dddb0bc8/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
        imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    {
        id: 1,
        name: 'Fusion',
        category: 'Image #4',
        href: '#',
        price: '$49',
        imageSrc: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b0ab2c55-1133-48b5-9d4f-231cf64f12a6/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
        imageAlt:
            'Payment application dashboard screenshot with transaction table, financial highlights, and main clients on colorful purple background.',
    },
    // More products...
]


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="p-10 lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
                <nav className="space-y-1">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                                item.current
                                    ? 'bg-gray-50 text-indigo-700 hover:text-indigo-700 hover:bg-white'
                                    : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                        >
                            <item.icon
                                className={classNames(
                                    item.current
                                        ? 'text-indigo-500 group-hover:text-indigo-500'
                                        : 'text-gray-400 group-hover:text-gray-500',
                                    'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                )}
                                aria-hidden="true"
                            />
                            <span className="truncate">{item.name}</span>
                        </a>
                    ))}
                </nav>
            </aside>

            <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                <form action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Description & Media</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    This information will show when the promo link is shared on social media.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                        Product URL
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                                            https://
                                        </span>
                                        <input
                                            type="text"
                                            name="company-website"
                                            id="company-website"
                                            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300"
                                            placeholder="example.com/product"
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        This is the URL of the product, as shown in the web browser.
                                    </p>
                                </div>
                                <div className="col-span-3">
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Product Description
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-2 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="Type the product description here."
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-2 text-sm text-gray-500">
                                        This description will show when the promo link is shared on social media.
                                    </p>
                                </div>
                                <div className="col-span-3"></div>
                                <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center">
                                </div>
                            </div>
                                <div className="col-span-3"></div>
                                {/* 
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Photo</label>
                                    <div className="mt-1 flex items-center">
                                        <span className="inline-block bg-gray-100 rounded-md overflow-hidden h-12 w-12">
                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                        <button
                                            type="button"
                                            className="ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div> */}
                                <div className="bg-white">
                                    <div className="">
                                        <label className="block text-sm font-medium text-gray-700">Preview Photo</label>
                                        <div className="mt-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                                            {products.map((product) => (
                                                <div key={product.id} className="relative group">
                                                    <div className="rounded-lg overflow-hidden bg-gray-100">
                                                        <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                                                        <div className="flex opacity-0 p-2 group-hover:opacity-100" aria-hidden="true">
                                                            <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                                                                Select Image
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="mt-1 text-xs text-gray-500">{product.category}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                        This photo will show when the promo link is shared on social media.
                                    </p>
                                    </div>
                                </div>
                                <div className="col-span-3">
                                    <label className="block text-sm font-medium text-gray-700">Add Photo</label>
                                    <div className="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
                                        <div className="space-y-1 text-center">
                                            <svg
                                                className="mx-auto h-12 w-12 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="flex text-sm text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>

                <form action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Promotion & Pricing</h3>
                                <p className="mt-1 text-sm text-gray-500">Set the promotion pricing, sales comission and timeline.</p>
                            </div>

                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    {/* <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Original Price
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    /> */}


                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                            Original Price
                                        </label>
                                        <div className="mt-1 relative rounded-md shadow-sm">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm">$</span>
                                            </div>
                                            <input
                                                type="text"
                                                name="price"
                                                id="price"
                                                className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border border-gray-300 rounded-md"
                                                placeholder="0.00"
                                                aria-describedby="price-currency"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-gray-500 sm:text-sm" id="price-currency">
                                                    USD
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
                                        Discount
                                    </label>
                                    <select
                                        id="discount"
                                        name="discount"
                                        defaultValue="0%"
                                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>0%</option>
                                        <option>5%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                        <option>30%</option>
                                    </select>
                                </div>

                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                        Discounted Price
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="0.00"
                                            aria-describedby="price-currency"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm" id="price-currency">
                                                USD
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="Comission" className="block text-sm font-medium text-gray-700">
                                        Sales Comission
                                    </label>
                                    <select
                                        id="comission"
                                        name="comission"
                                        defaultValue="0%"
                                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 pl-3 pr-10 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>0%</option>
                                        <option>5%</option>
                                        <option>10%</option>
                                        <option>15%</option>
                                        <option>20%</option>
                                        <option>25%</option>
                                        <option>30%</option>
                                    </select>
                                </div>

                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                        Comission Payout
                                    </label>
                                    <div className="mt-1 relative rounded-md shadow-sm">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border border-gray-300 rounded-md"
                                            placeholder="0.00"
                                            aria-describedby="price-currency"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm" id="price-currency">
                                                USD
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center">
                                </div>
                            </div>
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                        Start Date
                                    </label>
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        placeholder="01/01/2022"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-2 md:col-span-1">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                        End Date
                                    </label>
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        placeholder="01/01/2023"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>

                <form action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                            <div>
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Access & Status</h3>
                                <p className="mt-1 text-sm text-gray-500">
                                    Set the sales
                                </p>
                            </div>

                            <fieldset>
                                <legend className="text-base font-medium text-gray-900">Access</legend>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-start">
                                        <div className="h-5 flex items-center">
                                            <input
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="comments" className="font-medium text-gray-700">
                                                Entire Sales Team
                                            </label>
                                            <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start">
                                            <div className="h-5 flex items-center">
                                                <input
                                                    id="candidates"
                                                    name="candidates"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="candidates" className="font-medium text-gray-700">
                                                    Select Sales Team Members
                                                </label>
                                                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start">
                                            <div className="h-5 flex items-center">
                                                <input
                                                    id="offers"
                                                    name="offers"
                                                    type="checkbox"
                                                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="offers" className="font-medium text-gray-700">
                                                    No Sales Team Members
                                                </label>
                                                <p className="text-gray-500">Disables access for all users</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center">
                                </div>
                            </div>
                            <fieldset className="mt-6">
                                <legend className="text-base font-medium text-gray-900">Status</legend>
                                <p className="text-sm text-gray-500">Set the status of the product promotion.</p>
                                <div className="mt-4 space-y-4">
                                    <div className="flex items-center">
                                        <input
                                            id="push-everything"
                                            name="push-notifications"
                                            type="radio"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                        />
                                        <label htmlFor="push-everything" className="ml-3">
                                            <span className="block text-sm font-medium text-gray-700">Active</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                        />
                                        <label htmlFor="push-email" className="ml-3">
                                            <span className="block text-sm font-medium text-gray-700">Inactive</span>
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
