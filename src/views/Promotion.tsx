/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          indigo: colors.indigo,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    BellIcon,
    ClockIcon,
    TagIcon,
    CogIcon,
    CreditCardIcon,
    DocumentReportIcon,
    HomeIcon,
    MenuAlt1Icon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    XIcon,
} from '@heroicons/react/outline'
import {
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    OfficeBuildingIcon,
    SearchIcon,
    CurrencyDollarIcon
} from '@heroicons/react/solid'
import React from 'react'
import { KeyIcon, UserCircleIcon, ViewGridAddIcon } from '@heroicons/react/outline'

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

const navigation = [
    { name: 'Home', href: '/home', icon: HomeIcon, current: false },
    { name: 'Promotions', href: '/promotions', icon: TagIcon, current: true },
    { name: 'Employees', href: '/employees', icon: UserGroupIcon, current: false },
    { name: 'Comissions', href: '/comissions', icon: CreditCardIcon, current: false },
    { name: 'Analytics', href: '/analytics', icon: DocumentReportIcon, current: false },
]
const secondaryNavigation = [
    { name: 'Settings', href: '/billing', icon: CogIcon },
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
]
const cards = [
    { name: 'Sales This Month', href: '#', icon: CurrencyDollarIcon, amount: '$60,659.45' },
    { name: 'Sales This Week', href: '#', icon: CurrencyDollarIcon, amount: '$18,758.99' },
    { name: 'Sales Today', href: '#', icon: CurrencyDollarIcon, amount: '$5,531.21' },
    // More items...
]
const transactions = [
    {
        id: 1,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    // More transactions...
    {
        id: 2,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    {
        id: 3,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    {
        id: 4,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    {
        id: 5,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    {
        id: 6,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    {
        id: 7,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    {
        id: 8,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    {
        id: 9,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    {
        id: 10,
        name: 'Molly Sanders',
        href: '#',
        amount: '$200',
        currency: 'USD',
        status: 'success',
        date: 'July 11, 2020',
        datetime: '2020-07-11',
        product: 'Nike Air Zoom Alphafly NEXT%',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
]
const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

var map: { [key: string]: any } = {}; // A map of string -> anything you like


export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="relative h-screen flex overflow-hidden bg-gray-100">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4">
                                {/* <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                  alt="Easywire logo"
                /> */}
                                <h1 className="ml-0 text-2xl font-bold leading-2 text-white sm:leading-9 sm:truncate">
                                    Social Sales
                                </h1>
                            </div>
                            <nav className="mt-5 flex-shrink-0 h-full divide-y divide-indigo-800 overflow-y-auto" aria-label="Sidebar">
                                <div className="px-2 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:text-white hover:bg-indigo-600',
                                                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-200" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className="mt-6 pt-6">
                                    <div className="px-2 space-y-1">
                                        {secondaryNavigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-indigo-100 hover:text-white hover:bg-indigo-600"
                                            >
                                                <item.icon className="mr-4 h-6 w-6 text-indigo-200" aria-hidden="true" />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <div className="flex flex-col w-64">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex flex-col flex-grow bg-indigo-700 pt-5 pb-4 overflow-y-auto">
                        <div className="flex items-center flex-shrink-0 px-4">
                            {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                alt="Easywire logo"
              /> */}
                            <h1 className="ml-0 text-2xl font-bold leading-2 text-white sm:leading-9 sm:truncate">
                                Social Sales
                            </h1>
                        </div>
                        <nav className="mt-5 flex-1 flex flex-col divide-y divide-indigo-800 overflow-y-auto" aria-label="Sidebar">
                            <div className="px-2 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:text-white hover:bg-indigo-600',
                                            'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-200" aria-hidden="true" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="mt-6 pt-6">
                                <div className="px-2 space-y-1">
                                    {secondaryNavigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-indigo-100 hover:text-white hover:bg-indigo-600"
                                        >
                                            <item.icon className="mr-4 h-6 w-6 text-indigo-200" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-auto focus:outline-none max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="relative flex items-center justify-between max-w-8xl mx-auto py-2 mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-10 lg:px-4 xl:px-4">
                    <span className="pr-3 text-lg font-medium text-gray-900">Promotion</span>
                    <a
                        href="#"
                    >
                        <button
                            type="button"
                            className="inline-flex items-center shadow-sm px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {/* <PlusSmIcon className="-ml-1.5 mr-1 h-5 w-5 text-white" aria-hidden="true" /> */}
                            <span>Edit</span>
                        </button>
                    </a>
                </div>

                <div className="pt-2 p-4 max-w-8xl">
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
                                        <div className="col-span-2 md:col-span-1">
                                            <label htmlFor="" className="block text-sm font-medium text-gray-700 inline-flex">
                                                <span className="flex-1 flex space-x-2 truncate ">
                                                    <TagIcon className="flex-shrink-0 h-5 w-5 mr-2 text-gray-400" aria-hidden="true" />
                                                </span>
                                                Promotion Name
                                            </label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                autoComplete=""
                                                placeholder="New Product"
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="col-span-2 md:col-span-1">
                                            <label htmlFor="" className="block text-sm font-medium text-gray-700 inline-flex">
                                                Product Name
                                            </label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                autoComplete=""
                                                placeholder="New Product"
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-2 md:col-span-1">
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
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-gray-300" />
                                        </div>
                                        <div className="relative flex justify-center">
                                        </div>
                                    </div>
                                    <div className="col-span-3"></div>
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="col-span-3">
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                Product Description #1
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
                                        <div className="col-span-3">
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                Product Description #2
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
                                        </div>
                                        <div className="col-span-3">
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                                Product Description #3
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
                                        </div>
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
                                {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div> */}
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
                                        <div className="col-span-3 sm:col-span-2 md:col-span-2">
                                            <div className="col-span-3 sm:col-span-2 md:col-span-2">
                                                <label htmlFor="Promotion" className="block text-sm font-medium text-gray-700">
                                                    Promotion Type
                                                </label>
                                                <select
                                                    id="promotiontype"
                                                    name="promotiontype"
                                                    defaultValue="0%"
                                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    {/* <option disabled selected hidden value="">Select</option> */}
                                                    <option>% Discount</option>
                                                    <option>Sign Up Discount</option>
                                                    <option>Buy One, Get One</option>
                                                    <option>Custom Offer</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-span-3 sm:col-span-2 md:col-span-2">
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
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-3 sm:col-span-2 md:col-span-2">
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

                                        <div className="col-span-3 sm:col-span-2 md:col-span-2">
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
                                        <div className="col-span-3 sm:col-span-2 md:col-span-2">
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

                                        <div className="col-span-3 sm:col-span-2 md:col-span-2">
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
                                        <div className="col-span-3 sm:col-span-2 md:col-span-2">
                                            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                                Start Date
                                            </label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                autoComplete=""
                                                placeholder="01/01/2022"
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-3 sm:col-span-2 md:col-span-2">
                                            <label htmlFor="" className="block text-sm font-medium text-gray-700">
                                                End Date
                                            </label>
                                            <input
                                                type="text"
                                                name=""
                                                id=""
                                                autoComplete=""
                                                placeholder="01/01/2023"
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Save
                                    </button>
                                </div> */}
                            </div>
                        </form>

                        <form action="#" method="POST">
                            <div className="shadow sm:rounded-md sm:overflow-hidden">
                                <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                    <div>
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Access & Status</h3>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Set the sales access.
                                        </p>
                                    </div>

                                    <fieldset>
                                        <legend className="text-base font-medium text-gray-900">Access</legend>
                                        <p className="text-sm text-gray-500">Set the access to the product promotion.</p>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="h-5 flex items-center">
                                                    <input
                                                        id="comments"
                                                        name="access"
                                                        type="radio"
                                                        className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                                        Entire Sales Team
                                                    </label>
                                                    <p className="text-gray-500">All sales members.</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-start">
                                                    <div className="h-5 flex items-center">
                                                        <input
                                                            id="candidates"
                                                            name="access"
                                                            type="radio"
                                                            className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="candidates" className="font-medium text-gray-700">
                                                            Select Sales Team Groups
                                                        </label>
                                                        <p className="text-gray-500">Specified sales memebers only.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-start">
                                                    <div className="h-5 flex items-center">
                                                        <input
                                                            id="offers"
                                                            name="access"
                                                            type="radio"
                                                            className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300 rounded"
                                                        />
                                                    </div>
                                                    <div className="ml-3 text-sm">
                                                        <label htmlFor="offers" className="font-medium text-gray-700">
                                                            No Access
                                                        </label>
                                                        <p className="text-gray-500">Disables access for all users.</p>
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
                                    <div className="col-span-3">                                     </div>
                                    <div className="col-span-3">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                            Promo Push Notification
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                                id="about"
                                                name="about"
                                                rows={2}
                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-2 block w-full sm:text-sm border border-gray-300 rounded-md"
                                                placeholder="Type the notification here."
                                                defaultValue={''}
                                            />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                            This promotion push notification will be sent to employees and sales partners.
                                        </p>
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
                                                    className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300"
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
                                                    className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300"
                                                />
                                                <label htmlFor="push-email" className="ml-3">
                                                    <span className="block text-sm font-medium text-gray-700">Inactive</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                    >
                                        Save
                                    </button>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
