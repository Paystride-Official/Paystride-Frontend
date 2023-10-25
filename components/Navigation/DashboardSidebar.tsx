"use client"

import {Dialog, Menu, Transition} from "@headlessui/react";
import React, {Fragment, useState} from "react";

import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
    DashboardIcon,
    Logo,
    LogoutHalfIcon,
    NotificationIcon, PaymentPointIcon,
    SettingsIcon, SettlementsIcon, SupportIcon,
    TransactionsIcon
} from "@/components/icons/Icons";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon},
    { name: 'Transactions', href: '/dashboard/transactions', icon: TransactionsIcon},
    { name: 'Settings', href: '/dashboard/settings', icon: SettingsIcon},
    { name: 'Payment Point', href: '/dashboard/payment-point', icon: PaymentPointIcon},
    { name: 'Settlements', href: '/dashboard/settlements', icon: SettlementsIcon},
    { name: 'Support', href: '/dashboard/support', icon: SupportIcon},
]
/*const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]*/

// @ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export const DashboardSidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const currentRoute = usePathname()
    console.log('route', currentRoute)
    return (
        <>
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-900/80" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                        <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                            <span className="sr-only">Close sidebar</span>
                                            <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </button>
                                    </div>
                                </Transition.Child>
                                {/* Sidebar component, swap this element with another sidebar if you like */}
                                <div className="flex grow flex-col gap-y-5 sidebar overflow-y-auto bg-white px-6 pb-4">
                                    <div className="flex h-16 shrink-0 gap-2 items-center">
                                        <Logo />
                                        <h3><span className="theme-color font-bold"> Paystride</span></h3>
                                    </div>
                                    <nav className="flex flex-1 flex-col">
                                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                            <li>
                                                <ul role="list" className="-mx-2 space-y-2">
                                                    {navigation.map((item) => (
                                                        <li key={item.name}>
                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                    currentRoute == item.href
                                                                        ? 'active'
                                                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold flex items-center'
                                                                )}
                                                            >
                                                                <item.icon
                                                                />
                                                                {item.name}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto sidebar bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 gap-2 items-center">
                        <Logo />
                        <h3><span className="theme-color font-bold"> Paystride</span></h3>
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-3">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    currentRoute == item.href
                                                        ? 'active'
                                                        : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold flex items-center'
                                                )}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        currentRoute == item.href
                                                            ? 'active'
                                                            : ''
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="lg:pl-72">
                <div className="sticky navbar top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 bg-white px-4 sm:gap-x-6 sm:px-6 lg:px-8">
                    <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Separator */}
                    <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

                    <div className="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
                        <div className="items-center grid grid-cols-2 gap-12">
                            <button type="button" className="-m-2.5 p-1.5 rounded-xl bg-gray-100 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">View notifications</span>
                                {/*<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                <NotificationIcon />
                            </button>

                            {/* Separator */}

                            {/* Profile dropdown */}

                            <button type="button" className="-m-2.5 p-1.5 rounded-xl bg-gray-100 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Logout</span>
                                {/*<BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                                <LogoutHalfIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};