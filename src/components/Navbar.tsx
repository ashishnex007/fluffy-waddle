import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiVendingMachine } from "react-icons/gi";
import { IoVideocam } from "react-icons/io5";
import car from '/car.jpg';
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const Navbarx = () => {
  const navigate = useNavigate();

  return (
    <div className='sticky top-0 bg-opacity-90 backdrop-filter backdrop-blur-lg z-10 py-2'>
    <div className='flex justify-evenly'>
      <NavigationMenu>
        <div className='flex cursor-pointer items-center px-10' onClick={()=> navigate("/")}>
          <GiVendingMachine />
          TVM
        </div>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <div>
              <ListItem href="/" title="Introduction">
                Tablet Vending Machine
              </ListItem>
              <ListItem href="/#workflow" title="Workflow">
                See how the magic happens
              </ListItem>
              <ListItem href="https://prescription-1.onrender.com/" target='_blank' title="Prescription">
                Website for prescription generation
              </ListItem>
              </div>
              <li className="row-span-3">
                <NavigationMenuLink asChild className={`row-span-3 bg-${car}`}>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/#demo"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Tablet Vending Machine
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      See Demo Video <IoVideocam />
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/features" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/contact" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link to="/about" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
    </div>
    </div>
  )
}

export default Navbarx
