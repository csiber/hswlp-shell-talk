"use client"

import Link from "next/link"
import type { Route } from 'next'
import { usePathname } from "next/navigation"
import { ComponentIcon, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useSessionStore } from "@/state/session"
import { cn } from "@/lib/utils"
import { useNavStore } from "@/state/nav"
import { Skeleton } from "@/components/ui/skeleton"
import { SITE_NAME } from "@/constants"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import useSignOut from "@/hooks/useSignOut"
import { useRouter } from "next/navigation"

type NavItem = {
  name: string;
  href: Route;
}

const UserMenu = ({ onNavigate }: { onNavigate?: () => void }) => {
  const { session } = useSessionStore()
  const { signOut } = useSignOut()
  const router = useRouter()

  if (!session?.user) {
    return null
  }

  const user = session.user
  const displayName =
    user.nickname ||
    [user.firstName, user.lastName].filter(Boolean).join(" ") ||
    user.email ||
    ""

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-9 w-9 cursor-pointer">
          <AvatarImage src={user.avatar ?? ''} alt={displayName || undefined} />
          <AvatarFallback>{displayName.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        <DropdownMenuItem
          onClick={() => {
            router.push('/settings')
            onNavigate?.()
          }}
        >
          Profile
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            signOut().then(() => router.push('/'))
            onNavigate?.()
          }}
        >
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Navigation() {
  const { session, isLoading } = useSessionStore()
  const { isOpen, setIsOpen } = useNavStore()
  const pathname = usePathname()

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    ...(session
      ? ([
          { name: "Dashboard", href: "/dashboard" as Route },
          { name: "My calls", href: "/my-calls" as Route },
        ] as NavItem[])
      : []),
    { name: "Pricing", href: "/pricing" as Route },
    { name: "FAQ", href: "/faq" as Route },
  ]

  const isActiveLink = (itemHref: string) => {
    if (itemHref === "/") {
      return pathname === "/"
    }
    return pathname === itemHref || pathname.startsWith(`${itemHref}/`)
  }

  return (
    <nav className="sticky top-0 dark:bg-muted/30 bg-muted/60 shadow dark:shadow-xl z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2 md:gap-3">
              <ComponentIcon className="w-6 h-6 md:w-7 md:h-7" />
              {SITE_NAME}
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="flex items-baseline space-x-4">
               {isLoading ? (
                 <>
                   <Skeleton className="h-8 w-16" />
                   <Skeleton className="h-8 w-16" />
                   <Skeleton className="h-8 w-16" />
                   <Skeleton className="h-8 w-16" />
                   <Skeleton className="h-8 w-16" />
                 </>
               ) : (
                navItems.map((item) => {
                  const active = isActiveLink(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "text-muted-foreground hover:text-foreground no-underline px-3 h-16 flex items-center text-sm font-medium transition-colors relative",
                        active && "text-foreground after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                })
              )}
            </div>
            {isLoading ? (
              <Skeleton className="h-10 w-[80px] bg-primary" />
            ) : session ? (
              <UserMenu />
            ) : (
              <Button asChild>
                <Link href="/sign-in">Sign in</Link>
              </Button>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="p-6">
                  <Menu className="w-9 h-9" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <div className="mt-6 flow-root">
                  <div className="space-y-2">
                     {isLoading ? (
                       <>
                         <Skeleton className="h-10 w-full" />
                         <Skeleton className="h-10 w-full" />
                         <Skeleton className="h-10 w-full" />
                         <Skeleton className="h-10 w-full" />
                         <Skeleton className="h-10 w-full" />
                       </>
                     ) : (
                      <>
                        {navItems.map((item) => {
                          const active = isActiveLink(item.href)
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 no-underline transition-colors relative",
                                active && "text-foreground"
                              )}
                              onClick={() => setIsOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )
                        })}
                        <div className="px-3 pt-4">
                          {session ? (
                            <UserMenu onNavigate={() => setIsOpen(false)} />
                          ) : (
                            <Button asChild onClick={() => setIsOpen(false)}>
                              <Link href="/sign-in">Sign in</Link>
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

