
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
    UserCircle,
    UserCircleIcon,
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

const navigation = [
    { name: 'Home', href: '/home', icon: HomeIcon, current: false },
    { name: 'Promotions', href: '/promotions', icon: TagIcon, current: false },
    { name: 'Employees', href: '/employees', icon: UserGroupIcon, current: false },
    { name: 'Comissions', href: '/comissions', icon: CreditCardIcon, current: true },
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
        name: 'John West',
        href: '#',
        location: 'NYC Soho',
        group: 'North',
        amount: '$180',
        currency: 'USD',
        status: 'Invited',
        date: 'September 10, 2021',
        datetime: '2020-07-11',
        product: 'Retail Sales',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
    // More transactions...
    {
        id: 2,
        name: 'Sarah Williams',
        href: '#',
        location: 'NYC Soho',
        group: 'North',
        amount: '$250',
        currency: 'USD',
        status: 'Active',
        date: 'September 9, 2021',
        datetime: '2020-07-11',
        product: 'Sales Manager',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/228c9922-686e-443d-b04b-16857e9af198/zoomx-vaporfly-next-2-mens-racing-shoes-glWqfm.png',
    },
    {
        id: 3,
        name: 'William Walton',
        href: '#',
        location: 'NYC Soho',
        group: 'North',
        amount: '$260',
        currency: 'USD',
        status: 'Active',
        date: 'September 8, 2021',
        datetime: '2020-07-11',
        product: 'Retail Sales',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/air-zoom-alphafly-next-flyknit-mens-road-racing-shoe-fNntgL.png',
    },
    {
        id: 4,
        name: 'Rodney South',
        href: '#',
        location: 'NYC Soho',
        group: 'North',
        amount: '$120',
        currency: 'USD',
        status: 'Active',
        date: 'September 7, 2021',
        datetime: '2020-07-11',
        product: 'Retail Sales',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-mens-shoes-8F4Sk5.png',
    },
    {
        id: 5,
        name: 'Adam Norton',
        href: '#',
        location: 'NYC Soho',
        group: 'North',
        amount: '$200',
        currency: 'USD',
        status: 'Active',
        date: 'September 7, 2021',
        datetime: '2020-07-11',
        product: 'Retail Sales',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7c73ee6b-5be4-44c0-9790-70e630faccfa/zoom-freak-3-basketball-shoe-8rbspb.png',
    },
    {
        id: 6,
        name: 'Mark Alison',
        href: '#',
        location: 'NYC Soho',
        group: 'North',
        amount: '$200',
        currency: 'USD',
        status: 'Active',
        date: 'September 7, 2021',
        datetime: '2020-07-11',
        product: 'Retail Sales',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03283e6c-87c5-4ef0-81a4-505e7ffaabeb/space-hippie-04-mens-shoes-gGWDLk.png',
    },
    {
        id: 7,
        name: 'Alec Conway',
        href: '#',
        location: 'NYC Soho',
        group: 'North',
        amount: '$200',
        currency: 'USD',
        status: 'Inactive',
        date: 'September 7, 2021',
        datetime: '2020-07-11',
        product: 'Retail Sales',
        image:
            'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    },
]
const statusStyles = {
    Active: 'bg-green-100 text-green-800',
    Invited: 'bg-blue-100 text-blue-800',
    Inactive: 'bg-gray-100 text-gray-800',
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

            <div className="flex-1 overflow-auto focus:outline-none">
                <div className="relative z-10 flex-shrink-0 flex h-16 border-b border-gray-200 lg:border-none">
                    <button
                        type="button"
                        className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    {/* Search bar */}
                    <div className="flex-1 px-4 flex justify-between sm:px-6 lg:px-2">
                        <div className="flex-1 flex">
                            <form className="w-full flex md:ml-0" action="#" method="GET">
                                {/* <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label> */}
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    {/* <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div> */}
                                    <div
                                        className="block w-full bg-gray-100 h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                                        placeholder="Search"
                                        type="search"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                className=" p-2 rounded-full bg-gray-200 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Profile dropdown */}
                            <Menu as="div" className="ml-3 relative">
                                <div>
                                    <Menu.Button className="max-w-xs rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-200">
                                        {/* <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        /> */}
                                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
                                            <span className="font-medium leading-none text-white">EB</span>
                                        </span>
                                        <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                                            <span className="sr-only">Open user menu for </span>Emilia Birch
                                        </span>
                                        <ChevronDownIcon
                                            className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        {/* <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item> */}
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="#"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Settings
                                                </a>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <a
                                                    href="/signIn"
                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                >
                                                    Logout
                                                </a>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </div>
                <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
                    {/* Page header */}
                    <div className="mt-8">
                        {/* <div className="relative"> */}
                        <div className="relative flex justify-between max-w-6xl mx-auto py-2 mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8 xl:px-8">
                            <span className="pr-3 text-lg font-medium text-gray-900">Comissions</span>
                            {/* <div className="inline-flex">
                                <span className="pr-3 text-lg font-medium text-gray-900">Employees</span>
                                <div className="max-w-sm pr-4">
                                    <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                        Position
                                    </label>
                                    <select
                                        id="promotiontype"
                                        name="promotiontype"
                                        defaultValue="0%"
                                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                                    >
                                        <option>Retail Sales</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="max-w-sm pr-4">
                                    <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                        Location
                                    </label>
                                    <select
                                        id="promotiontype"
                                        name="promotiontype"
                                        defaultValue="0%"
                                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                                    >
                                        <option>NYC Soho</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="max-w-sm pr-4">
                                    <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                        Group
                                    </label>
                                    <select
                                        id="promotiontype"
                                        name="promotiontype"
                                        defaultValue="0%"
                                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                                    >
                                        <option>North</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                <div className="max-w-sm">
                                    <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                        Status
                                    </label>
                                    <select
                                        id="promotiontype"
                                        name="promotiontype"
                                        defaultValue="0%"
                                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xs"
                                    >
                                        <option>Active</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                                </div> */}

                            {/* Activity list (smallest breakpoint only) */}
                            <button
                                type="button"
                                className="inline-flex items-center shadow-sm px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {/* <PlusSmIcon className="-ml-1.5 mr-1 h-5 w-5 text-white" aria-hidden="true" /> */}
                                <span>Export</span>
                            </button>
                        </div>
                        {/* </div> */}

                        <div className="relative flex items-center justify-between max-w-6xl mx-auto py-2 mt-0 px-4 text-lg font-medium text-gray-900 sm:px-6 lg:px-8 xl:px-18">

                            <div className="">
                                <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                    Search
                                </label>
                                <div className="relative text-gray-400 focus-within:text-gray-600 pr-4">
                                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none ml-2" aria-hidden="true">
                                        <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="search-field"
                                        name="search-field"
                                        className="mt-1 block w-full pl-8 pr-3 py-2 px-3 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-offset-0 focus:ring-indigo-500 sm:text-sm"
                                        placeholder=""
                                        type="search"
                                    />
                                </div>
                            </div>
                            <div className="max-w-xl w-1/5 pr-4">
                                <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                    Position
                                </label>
                                <select
                                    id="promotiontype"
                                    name="promotiontype"
                                    defaultValue="All"
                                    className="form-select mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option>All</option>
                                    <option>Retail Sales</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="max-w-xl w-1/5 pr-4">
                                <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                    Location
                                </label>
                                <select
                                    id="promotiontype"
                                    name="promotiontype"
                                    defaultValue="0%"
                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option>All</option>
                                    <option>NYC Soho</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="max-w-xl w-1/5 pr-4">
                                <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                    Group
                                </label>
                                <select
                                    id="promotiontype"
                                    name="promotiontype"
                                    defaultValue="0%"
                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option>All</option>
                                    <option>North</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="max-w-xl w-1/5">
                                <label htmlFor="Promotion" className="block text-xs font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    id="promotiontype"
                                    name="promotiontype"
                                    defaultValue="0%"
                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option>All</option>
                                    <option>Active</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div>

                        {/* Activity list (smallest breakpoint only) */}
                        <div className="shadow sm:hidden">
                            <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                                {transactions.map((transaction) => (
                                    <li key={transaction.id}>
                                        <a href={transaction.href} className="block px-4 py-4 bg-white hover:bg-gray-50">
                                            <span className="flex items-center space-x-4">
                                                <span className="flex-1 flex space-x-2 truncate">
                                                    <CashIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    <span className="flex flex-col text-gray-500 text-sm truncate">
                                                        <span className="truncate">{transaction.name}</span>
                                                        <span>
                                                            <span className="text-gray-900 font-medium">{transaction.amount}</span>{' '}
                                                            {transaction.currency}
                                                        </span>
                                                        <time dateTime={transaction.datetime}>{transaction.date}</time>
                                                    </span>
                                                </span>
                                                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <nav
                                className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
                                aria-label="Pagination"
                            >
                                <div className="flex-1 flex justify-between">
                                    <a
                                        href="#"
                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                    >
                                        Previous
                                    </a>
                                    <a
                                        href="#"
                                        className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                                    >
                                        Next
                                    </a>
                                </div>
                            </nav>
                        </div>

                        {/* Activity table (small breakpoint and up) */}
                        <div className="hidden sm:block">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex flex-col mt-2">
                                    <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead>
                                                <tr>
                                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Name
                                                    </th>
                                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Position
                                                    </th>
                                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Location
                                                    </th>
                                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Group
                                                    </th>
                                                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Status
                                                    </th>
                                                    <th className="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block">
                                                        Earned
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {transactions.map((transaction) => (
                                                    <tr key={transaction.id} className="bg-white">
                                                        <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            <div className="flex">
                                                                <a href={transaction.href} className="group inline-flex space-x-2 truncate text-sm">
                                                                    <UserCircleIcon
                                                                        className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                                                        aria-hidden="true"
                                                                    />
                                                                    <p className="text-gray-500 truncate group-hover:text-gray-900">{transaction.name}</p>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            <div className="flex items-center">
                                                                <a href={transaction.href} className="group inline-flex space-x-4 truncate text-sm">
                                                                    {/* <div className="flex-shrink-0 h-10 w-10">
                                                                        <img className="h-10 w-10 rounded-sm" src={transaction.image} alt="" />
                                                                    </div> */}
                                                                    <p className="text-gray-500 self-center group-hover:text-gray-900">{transaction.product}</p>
                                                                </a>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            <div className="flex items-center">
                                                                <p className="text-gray-500 self-center group-hover:text-gray-900">{transaction.location}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                            <div className="flex items-center">
                                                                <p className="text-gray-500 self-center group-hover:text-gray-900">{transaction.group}</p>
                                                            </div>
                                                        </td>
                                                        <td className="hidden px-6 py-6 whitespace-nowrap text-sm text-gray-500 md:block">
                                                            <span
                                                                className={classNames(
                                                                    statusStyles[transaction.status],
                                                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                                                )}
                                                            >
                                                                {transaction.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                                                            <time dateTime={transaction.datetime}>{transaction.amount}</time>
                                                        </td>
                                                        {/* <td className="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500">
                                                            <time dateTime={transaction.datetime}>{transaction.date}</time>
                                                        </td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        {/* Pagination */}
                                        <nav
                                            className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                                            aria-label="Pagination"
                                        >
                                            <div className="hidden sm:block">
                                                <p className="text-sm text-gray-700">
                                                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                                                    <span className="font-medium">20</span> results
                                                </p>
                                            </div>
                                            <div className="flex-1 flex justify-between sm:justify-end">
                                                <a
                                                    href="#"
                                                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                >
                                                    Previous
                                                </a>
                                                <a
                                                    href="#"
                                                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                                >
                                                    Next
                                                </a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div >
    )
}

