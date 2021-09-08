/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XIcon, HomeIcon, TagIcon, LinkIcon, ShoppingBagIcon, CashIcon, LightningBoltIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import React from 'react'

const products = [
  {
    id: 1,
    name: 'Nike Air Zoom Alphafly NEXT%',
    description: 'Our premiere racing shoe is loaded with new technology and innovation that includes two ultra-responsive Air Zoom pods in the forefoot and additional ZoomX foam in the heel',
    price: '$149',
    discountPrice: '$129',
    comission: '$12',
    rating: 5,
    promoType: '15% Discount',
    imageSrc: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 2,
    name: 'Nike Zoomx Vaporfly Next% 2',
    description: 'Our premiere racing shoe is loaded with new technology and innovation that includes two ultra-responsive Air Zoom pods in the forefoot and additional ZoomX foam in the heel',
    price: '$149',
    discountPrice: '$129',
    comission: '$12',
    rating: 5,
    promoType: '15% Discount',
    imageSrc: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/228c9922-686e-443d-b04b-16857e9af198/zoomx-vaporfly-next-2-mens-racing-shoes-glWqfm.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 3,
    name: 'Nike Air Zoom Alphafly NEXT% Flyknit',
    description: 'Our premiere racing shoe is loaded with new technology and innovation that includes two ultra-responsive Air Zoom pods in the forefoot and additional ZoomX foam in the heel',
    price: '$149',
    discountPrice: '$129',
    comission: '$12',
    rating: 5,
    promoType: '15% Discount',
    imageSrc: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f8760-47d8-4396-9f0a-5feb79598e41/air-zoom-alphafly-next-flyknit-mens-road-racing-shoe-fNntgL.png',
    imageAlt: 'TODO',
    href: '#',
  },
  {
    id: 4,
    name: 'Nike Air Max 2021',
    description: 'Our premiere racing shoe is loaded with new technology and innovation that includes two ultra-responsive Air Zoom pods in the forefoot and additional ZoomX foam in the heel',
    price: '$149',
    discountPrice: '$129',
    comission: '$12',
    rating: 4,
    promoType: '15% Discount',
    imageSrc: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e5af7319-a671-4187-a10a-020e09e7b3db/air-max-2021-mens-shoes-8F4Sk5.png',
    imageAlt: 'TODO',
    href: '#',
  },
  // More products...
]

const product = {
  name: 'Nike Air Zoom Alphafly NEXT%',
  description: 'Our premiere racing shoe is loaded with new technology and innovation that includes two ultra-responsive Air Zoom pods in the forefoot and additional ZoomX foam in the heel',
  price: '$149',
  discountPrice: '$129',
  comission: '$12',
  rating: 3.9,
  promoType: '15% Discount',
  href: '#',
  imageSrc: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6eebe93e-067a-4caf-b51e-b4b9583b3c2c/air-zoom-alphafly-next-mens-racing-shoes-fNntgL.png',
  imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: true },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: 'XXL', inStock: true },
    { name: 'XXXL', inStock: false },
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                      <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>

                      <section aria-labelledby="information-heading" className="">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>
                        {/* Reviews */}
                        <div className="">
                          <div className="inline-flex mb-8">
                            <p className="text-xl text-gray-400 ">{product.promoType}</p>
                          </div>
                          {/* <h4 className="sr-only">Reviews</h4> */}
                          <div className="flex items-center">
                            <div className="inline-flex">
                              <div className="ml-1">
                                <p className="text-sm text-gray-900">Original Price</p>
                                <p className="text-xl text-gray-400 line-through">{product.price}</p>
                              </div>
                              <div className="ml-4 pl-4 border-l border-gray-300">
                                <p className="text-sm text-gray-900">Promo Price</p>
                                <p className="text-xl text-gray-900">{product.discountPrice}</p>
                              </div>
                              <div className="ml-4 pl-4 border-l border-gray-300">
                                <p className="text-sm text-gray-900">Sale Comission</p>
                                <p className="text-xl text-green-700 rounded-md">{product.comission}</p>
                              </div>
                            </div>
                            {/* <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div> */}
                          </div>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-10">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Colors */}

                          {/* Sizes */}
                          <div className="mt-10">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm text-gray-400 font-medium">Description</h4>
                              {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a> */}
                            </div>
                            <p className="text-sm font-sm text-gray-600" >{product.description}</p>

                            {/* <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                              <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4">
                                {product.sizes.map((size) => (
                                  <RadioGroup.Option
                                    key={size.name}
                                    value={size}
                                    disabled={!size.inStock}
                                    className={({ active }) =>
                                      classNames(
                                        size.inStock
                                          ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                          : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                        active ? 'ring-2 ring-indigo-500' : '',
                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="p">{size.name}</RadioGroup.Label>
                                        {size.inStock ? (
                                          <div
                                            className={classNames(
                                              active ? 'border' : 'border-2',
                                              checked ? 'border-indigo-500' : 'border-transparent',
                                              'absolute -inset-px rounded-md pointer-events-none'
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <div
                                            aria-hidden="true"
                                            className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none"
                                          >
                                            <svg
                                              className="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentColor"
                                            >
                                              <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                            </svg>
                                          </div>
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup> */}

                            <div className="mt-6">
                              <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                  <div className="w-full border-t border-gray-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                  <span className="px-2 bg-white text-gray-500">Share Promotion</span>
                                </div>
                              </div>

                              <div className="mt-6 grid grid-cols-5 gap-3">
                                <div>
                                  <a
                                    href="https://www.facebook.com/sharer.php?u={url}"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                  >
                                    <span className="sr-only">Facebook</span>
                                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px">    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z" /></svg>
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                  >
                                    <span className="sr-only">Instagram</span>
                                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" /></svg>
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="https://api.whatsapp.com/send?phone={phone_number}&text={title}%20{url}"
                                    // href="whatsapp://send/?text={text}%20{url}"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                  >
                                    <span className="sr-only">WhatsApp</span>
                                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                      <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z" />
                                    </svg>
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="https://twitter.com/intent/tweet?text=Hello%20world"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                  >
                                    <span className="sr-only">Twitter</span>
                                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                      <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                                    </svg>
                                  </a>
                                </div>

                                <div>
                                  <a
                                    href="#"
                                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                  >
                                    <span className="sr-only">Snapchat</span>
                                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 46.773438 35.078125 C 40.96875 34.121094 38.316406 28.109375 38.230469 27.914063 C 38.21875 27.878906 38.191406 27.816406 38.175781 27.78125 C 38 27.429688 37.824219 26.933594 37.972656 26.582031 C 38.226563 25.980469 39.433594 25.597656 40.15625 25.367188 C 40.410156 25.285156 40.652344 25.210938 40.839844 25.136719 C 42.59375 24.441406 43.46875 23.535156 43.449219 22.433594 C 43.433594 21.546875 42.753906 20.734375 41.753906 20.382813 C 41.40625 20.234375 41.007813 20.160156 40.605469 20.160156 C 40.332031 20.160156 39.917969 20.199219 39.519531 20.382813 C 38.851563 20.695313 38.265625 20.863281 37.847656 20.882813 C 37.757813 20.878906 37.679688 20.871094 37.613281 20.859375 L 37.65625 20.171875 C 37.851563 17.0625 38.097656 13.1875 37.046875 10.832031 C 33.945313 3.890625 27.375 3.351563 25.433594 3.351563 L 24.550781 3.359375 C 22.613281 3.359375 16.054688 3.898438 12.960938 10.835938 C 11.910156 13.191406 12.152344 17.0625 12.351563 20.175781 L 12.359375 20.292969 C 12.371094 20.484375 12.382813 20.675781 12.394531 20.859375 C 11.960938 20.9375 11.113281 20.792969 10.234375 20.382813 C 9.039063 19.824219 6.886719 20.5625 6.589844 22.125 C 6.457031 22.816406 6.617188 24.128906 9.164063 25.132813 C 9.355469 25.210938 9.59375 25.285156 9.851563 25.367188 C 10.570313 25.597656 11.777344 25.976563 12.03125 26.582031 C 12.179688 26.933594 12.003906 27.429688 11.796875 27.855469 C 11.6875 28.109375 9.050781 34.121094 3.234375 35.078125 C 2.492188 35.199219 1.964844 35.855469 2.003906 36.613281 C 2.015625 36.8125 2.066406 37.011719 2.148438 37.207031 C 2.675781 38.445313 4.59375 39.296875 8.171875 39.878906 C 8.234375 40.089844 8.304688 40.402344 8.34375 40.574219 C 8.417969 40.929688 8.5 41.289063 8.609375 41.664063 C 8.714844 42.019531 9.078125 42.84375 10.210938 42.84375 C 10.554688 42.84375 10.929688 42.769531 11.332031 42.691406 C 11.925781 42.574219 12.667969 42.429688 13.621094 42.429688 C 14.152344 42.429688 14.699219 42.476563 15.25 42.566406 C 16.265625 42.734375 17.183594 43.386719 18.25 44.136719 C 19.914063 45.316406 21.800781 46.648438 24.726563 46.648438 C 24.804688 46.648438 24.882813 46.644531 24.957031 46.640625 C 25.0625 46.644531 25.171875 46.648438 25.28125 46.648438 C 28.207031 46.648438 30.09375 45.3125 31.761719 44.136719 C 32.777344 43.414063 33.738281 42.738281 34.757813 42.566406 C 35.308594 42.476563 35.855469 42.429688 36.386719 42.429688 C 37.304688 42.429688 38.03125 42.546875 38.679688 42.675781 C 39.140625 42.765625 39.507813 42.808594 39.847656 42.808594 C 40.605469 42.808594 41.1875 42.375 41.398438 41.648438 C 41.507813 41.28125 41.585938 40.925781 41.664063 40.566406 C 41.695313 40.433594 41.769531 40.097656 41.835938 39.875 C 45.414063 39.292969 47.332031 38.441406 47.855469 37.214844 C 47.941406 37.019531 47.988281 36.816406 48.003906 36.605469 C 48.042969 35.859375 47.515625 35.203125 46.773438 35.078125 Z" /></svg>
                                  </a>
                                </div>
                              </div>
                              <div className="mt-4">
                                <a
                                  href="#"
                                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                >
                                  <span className="sr-only">Share Link</span>
                                  <LinkIcon className="w-8 h-8"></LinkIcon>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* 
                          <button
                            type="submit"
                            className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Add to bag
                          </button> */}
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="w-full h-screen">
        <header className="bg-white">
          <nav className="flex justify-between w-full bg-white text-gray-600 p-4 border b-bottom">
            <a href="/"><span className="font-bold text-xl">Social Sales</span></a>
            <div className="md:items-center md:w-auto flex">
              <div className="md:flex hidden">
                <div className="inline-flex items-center bg-gray-100 rounded-md p-1 mr-2">
                  <HomeIcon className="h-5 w-5 text-gray-600 mx-auto m-1 mr-1" aria-hidden="true" />
                  <a className="block md:text-gray-600 mr-1 px-1" href="/link">Home
                  </a>
                </div>
                <div className="inline-flex items-center bg-gray-100 rounded-md p-1 mr-2">
                  <TagIcon className="h-5 w-5 text-gray-600 mx-auto m-1 mr-1" aria-hidden="true" />
                  <a className="block md:text-gray-600 mr-1 px-1" href="/link">Promo
                  </a>
                </div>
                <div className="inline-flex items-center bg-gray-100 rounded-md p-1 mr-2">
                  <ShoppingBagIcon className="h-5 w-5 text-gray-600 mx-auto m-1 mr-1" aria-hidden="true" />
                  <a className="block md:text-gray-600 mr-1 px-1" href="/link">Sales
                  </a>
                </div>
                <div className="inline-flex items-center bg-gray-100 rounded-md p-1 mr-2">
                  <LightningBoltIcon className="h-5 w-5 text-gray-600 mx-auto m-1 mr-1" aria-hidden="true" />
                  <a className="block md:text-gray-600 mr-1 px-1" href="/link">Rank
                  </a>
                </div>
              </div>
              {/* <div className="flex text-sm" v-else>
                <a className="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" href="/auth/signin">Login</a>
                <a className="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" href="/auth/signup">Sign up</a>
              </div> */}
            </div>
          </nav>
        </header>
        <main className="flex justify-center items-center">
          <div className="bg-white">
            <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
              <h2 className="sr-only">Products</h2>
              <button
                type="button"
                className="hover:text-gray-500"
                onClick={() => setOpen(true)}
              >
                <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                  {products.map((product) => (
                    <div key={product.id} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
                      <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="pt-10 pb-4 text-center">
                        <h3 className="text-sm font-medium text-gray-900">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <div className="mt-3 flex flex-col items-center">
                          <p className="sr-only">{product.rating} out of 5 stars</p>
                          {/* <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                className={classNames(
                                  product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                                  'flex-shrink-0 h-5 w-5'
                                )}
                                aria-hidden="true"
                              />
                            ))}
                          </div> */}
                          <p className="mt-1 text-sm text-gray-500">{product.promoType}</p>
                        </div>
                        <div className="inline-flex justify-between">
                          <p className="mt-4 mx-2 text-base font-medium text-gray-400 line-through">{product.price}</p>
                          <p className="mt-4 mx-2 text-base font-medium text-gray-900">{product.discountPrice}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </button>
            </div>
          </div>
        </main>
        <div className="bottomNav fixed bottom-0 w-full border b-top">
          <nav className="md:hidden bottom-0 w-full bg-white text-xs">
            <ul className="flex mx-auto justify-between items-center text-white text-center opacity-75 text-xs w-full">
              <a href="/link" className="w-full rounded-sm">
                <li className="p-2">
                  <div className="p-1 rounded-md bg-gray-200">
                    <HomeIcon className="h-6 w-6 text-gray-600 mx-auto mb-1" aria-hidden="true" />
                    <span className="text-gray-600">Home</span>
                  </div>
                </li>
              </a>
              <a href="/link" className="w-full">
                <li className="p-2">
                  <div className="p-1 rounded-md">
                    <TagIcon className="h-6 w-6 text-gray-600 mx-auto mb-1" aria-hidden="true" />
                    <span className="text-gray-600">Promos</span>
                  </div>
                </li>
              </a>
              <a href="/link" className="w-full">
                <li className="p-2">
                  <div className="p-1 rounded-md">
                    <ShoppingBagIcon className="h-6 w-6 text-gray-600 mx-auto mb-1" aria-hidden="true" />
                    <span className="text-gray-600">Sales</span>
                  </div>
                </li>
              </a>
              <a href="/link" className="w-full">
                <li className="p-2">
                  <div className="p-1 rounded-md">
                    <LightningBoltIcon className="h-6 w-6 text-gray-600 mx-auto mb-1" aria-hidden="true" />
                    <span className="text-gray-600">Rank</span>
                  </div>
                </li>
              </a>
              {/* <a href="/link" className="w-full">
                <li className="p-4 hover:bg-gray-500">
                  <CashIcon className="h-6 w-6 text-gray-600 mx-auto" aria-hidden="true" />
                  <span className="text-gray-600">Payout</span>
                </li>
              </a> */}
            </ul>
          </nav>
        </div>
      </div>



    </div>
  )
}
