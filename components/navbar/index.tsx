import { Disclosure } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import router, {useRouter} from "next/router";
import Link from 'next/link'

import Logo from '../../public/assets/images/logo.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    const {pathname, push, locale, isReady, asPath} = useRouter()

    const navigation = [
        {
            name: 'Início',
            component: '',
            href: '/',
            current: asPath === "/"
        },
        {
            name: 'Energia',
            component: '',
            href: '/categories/energia',
            current: asPath === "/categories/energia"
        },
        {
            name: 'Força',
            component: '',
            href: '/categories/forca',
            current: asPath === "/categories/forca"
        },
        {
            name: 'Treino',
            component: '',
            href: '/categories/treino',
            current: asPath === "/categories/treino"
        },
    ]

  return (
    <div>
      <Disclosure as="nav" className="bg-primary">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center w-auto">
                  <div className="flex-shrink-0 w-auto">
                    <Link href='/'>
                      <a>
                        <img
                          className="h-11 w-100"
                          src={Logo.src}
                          alt="Workflow"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link href={item.href}>
                          <a
                            key={item.name}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-md font-medium '
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}