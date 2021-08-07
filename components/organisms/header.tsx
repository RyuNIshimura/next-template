import { Fragment } from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'List', href: '#' },
]

export default function Header() {
  return (
    <>
      <div className="bg-gray-700 shadow-lg">
        <Disclosure
          as="nav"
          className="bg-gray-700 dark:bg-gray-800 border-opacity-25 lg:border-none">
          {({ open }) => (
            <>
              <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative h-16 flex items-center justify-between lg:border-gray-400 lg:border-opacity-25">
                  <div className="px-2 flex items-center lg:px-0">
                    <div className="flex-shrink-0">
                      <Link href="/">
                        <a>
                          <h3 className="text-3xl">😃</h3>
                        </a>
                      </Link>
                    </div>
                    <div className="hidden lg:block lg:ml-10">
                      <div className="flex space-x-4">
                        {navigation.map((item, itemIdx) => (
                          <Link key={`${item.name}-${itemIdx}`} href={item.href}>
                            <a
                              className="text-white border border-transparent hover:bg-gray-800 dark:hover:bg-gray-700 hover:bg-opacity-75 rounded-md py-2 px-3 text-lg font-medium">
                              {item.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item, itemIdx) =>
                    itemIdx === 0 ? (
                      <Fragment key={item.name}>
                        <Link href={item.href}>
                          <a
                            className="bg-gray-700 dark:bg-gray-800 text-white block rounded-md py-2 px-3 text-base font-medium">
                            {item.name}
                          </a>
                        </Link>
                      </Fragment>
                    ) : (
                      <Link key={item.name} href={item.href}>
                        <a
                          className="text-white hover:bg-gray-500 dark:hover:bg-gray-800 hover:bg-opacity-75 block rounded-md py-2 px-3 text-base font-medium">
                          {item.name}
                        </a>
                      </Link>
                    )
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
