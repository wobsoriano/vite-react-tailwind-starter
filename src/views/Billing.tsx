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
import { Dialog, Disclosure, Menu, RadioGroup, Switch, Transition } from '@headlessui/react'
import { ChevronDownIcon, CurrencyDollarIcon, MenuAlt1Icon, SearchIcon, } from '@heroicons/react/solid'
import {
    BellIcon,
    TagIcon,
    UserGroupIcon,
    DocumentReportIcon,
    HomeIcon,
    CogIcon,
    CreditCardIcon,
    KeyIcon,
    MenuIcon,
    UserCircleIcon,
    ViewGridAddIcon,
    XIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/outline'
import React from 'react'

const user = {
    name: 'Lisa Marie',
    email: 'lisamarie@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', href: '/home', icon: HomeIcon, current: false },
    { name: 'Promotions', href: '/promotions', icon: TagIcon, current: false },
    { name: 'Employees', href: '/employees', icon: UserGroupIcon, current: false },
    { name: 'Comissions', href: '/comissions', icon: CreditCardIcon, current: false },
    { name: 'Analytics', href: '/analytics', icon: DocumentReportIcon, current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]
const subNavigation = [
    { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
    { name: 'Account', href: '#', icon: CogIcon, current: false },
    { name: 'Password', href: '#', icon: KeyIcon, current: false },
    { name: 'Notifications', href: '#', icon: BellIcon, current: false },
    { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: true },
    { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
]
const plans = [
    { name: 'Startup', priceMonthly: 29, priceYearly: 290, limit: 'Up to 5 active job postings' },
    { name: 'Business', priceMonthly: 99, priceYearly: 990, limit: 'Up to 25 active job postings' },
    { name: 'Enterprise', priceMonthly: 249, priceYearly: 2490, limit: 'Unlimited active job postings' },
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
const payments = [
    {
        id: 1,
        date: '1/1/2020',
        datetime: '2020-01-01',
        description: 'Business Plan - Annual Billing',
        amount: 'CA$109.00',
        href: '#',
    },
    // More payments...
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState(plans[1])
    const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true)

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
                <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">

                        {/* Payment details */}
                        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
                            <section aria-labelledby="payment-details-heading">
                                <form action="#" method="POST">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="bg-white py-6 px-4 sm:p-6">
                                            <div>
                                                <h2 id="payment-details-heading" className="text-lg leading-6 font-medium text-gray-900">
                                                    Payment details
                                                </h2>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Update your billing information. Please note that updating your location could affect your tax
                                                    rates.
                                                </p>
                                            </div>

                                            <div className="mt-6 grid grid-cols-4 gap-6">
                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        First name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="cc-given-name"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Last name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="cc-family-name"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                                                        Card Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="cc-number"
                                                        id="cc-number"
                                                        autoComplete="cc-number"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                                                </div>

                                                <div className="col-span-4 sm:col-span-1">
                                                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                                        Expration date
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="expiration-date"
                                                        id="expiration-date"
                                                        autoComplete="cc-exp"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                                        placeholder="MM / YY" />
                                                </div>

                                                <div className="col-span-4 sm:col-span-1">
                                                    <label htmlFor="security-code" className="flex items-center text-sm font-medium text-gray-700">
                                                        <span>Security code</span>
                                                        <QuestionMarkCircleIcon
                                                            className="ml-1 flex-shrink-0 h-5 w-5 text-gray-300"
                                                            aria-hidden="true" />
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="security-code"
                                                        id="security-code"
                                                        autoComplete="cc-csc"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        Country / Region
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country"
                                                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                                                    >
                                                        <option>United States</option>
                                                        <option>Canada</option>
                                                        <option>Mexico</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                        ZIP / Postal
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="postal-code"
                                                        id="postal-code"
                                                        autoComplete="postal-code"
                                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            {/* Plan */}
                            <section aria-labelledby="plan-heading">
                                <form action="#" method="POST">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                                            <div>
                                                <h2 id="plan-heading" className="text-lg leading-6 font-medium text-gray-900">
                                                    Plan
                                                </h2>
                                            </div>

                                            <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
                                                <RadioGroup.Label className="sr-only">Pricing plans</RadioGroup.Label>
                                                <div className="relative bg-white rounded-md -space-y-px">
                                                    {plans.map((plan, planIdx) => (
                                                        <RadioGroup.Option
                                                            key={plan.name}
                                                            value={plan}
                                                            className={({ checked }) => classNames(
                                                                planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                                                planIdx === plans.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                                                checked ? 'bg-indigo-50 border-indigo-200 z-10' : 'border-gray-200',
                                                                'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none'
                                                            )}
                                                        >
                                                            {({ active, checked }) => (
                                                                <>
                                                                    <div className="flex items-center text-sm">
                                                                        <span
                                                                            className={classNames(
                                                                                checked ? 'bg-indigo-500 border-transparent' : 'bg-white border-gray-300',
                                                                                active ? 'ring-2 ring-offset-2 ring-gray-900' : '',
                                                                                'h-4 w-4 rounded-full border flex items-center justify-center'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        >
                                                                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                                                                        </span>
                                                                        <RadioGroup.Label as="span" className="ml-3 font-medium text-gray-900">
                                                                            {plan.name}
                                                                        </RadioGroup.Label>
                                                                    </div>
                                                                    <RadioGroup.Description className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                                                                        <span
                                                                            className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'font-medium')}
                                                                        >
                                                                            ${plan.priceMonthly} / mo
                                                                        </span>{' '}
                                                                        <span className={checked ? 'text-indigo-700' : 'text-gray-500'}>
                                                                            (${plan.priceYearly} / yr)
                                                                        </span>
                                                                    </RadioGroup.Description>
                                                                    <RadioGroup.Description
                                                                        className={classNames(
                                                                            checked ? 'text-indigo-700' : 'text-gray-500',
                                                                            'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                                                                        )}
                                                                    >
                                                                        {plan.limit}
                                                                    </RadioGroup.Description>
                                                                </>
                                                            )}
                                                        </RadioGroup.Option>
                                                    ))}
                                                </div>
                                            </RadioGroup>

                                            <Switch.Group as="div" className="flex items-center">
                                                <Switch
                                                    checked={annualBillingEnabled}
                                                    onChange={setAnnualBillingEnabled}
                                                    className={classNames(
                                                        annualBillingEnabled ? 'bg-indigo-500' : 'bg-gray-200',
                                                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200'
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            annualBillingEnabled ? 'translate-x-5' : 'translate-x-0',
                                                            'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                        )} />
                                                </Switch>
                                                <Switch.Label as="span" className="ml-3">
                                                    <span className="text-sm font-medium text-gray-900">Annual billing </span>
                                                    <span className="text-sm text-gray-500">(Save 10%)</span>
                                                </Switch.Label>
                                            </Switch.Group>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            {/* Billing history */}
                            <section aria-labelledby="billing-history-heading">
                                <div className="bg-white pt-6 shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 sm:px-6">
                                        <h2 id="billing-history-heading" className="text-lg leading-6 font-medium text-gray-900">
                                            Billing history
                                        </h2>
                                    </div>
                                    <div className="mt-6 flex flex-col">
                                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden border-t border-gray-200">
                                                    <table className="min-w-full divide-y divide-gray-200">
                                                        <thead className="bg-gray-50">
                                                            <tr>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Date
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Description
                                                                </th>
                                                                <th
                                                                    scope="col"
                                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    Amount
                                                                </th>
                                                                {/*
`relative` is added here due to a weird bug in Safari that causes `sr-only` headings to introduce overflow on the body on mobile.
*/}
                                                                <th
                                                                    scope="col"
                                                                    className="relative px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                                >
                                                                    <span className="sr-only">View receipt</span>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white divide-y divide-gray-200">
                                                            {payments.map((payment) => (
                                                                <tr key={payment.id}>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                        <time dateTime={payment.datetime}>{payment.date}</time>
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                        {payment.description}
                                                                    </td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.amount}</td>
                                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                        <a href={payment.href} className="text-indigo-600 hover:text-indigo-900">
                                                                            View receipt
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
