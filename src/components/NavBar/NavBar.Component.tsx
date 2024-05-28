import {
    Box,
    Image,
    Link,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Style } from "./NavBar.Style";
import logo from "../../assets/logo.png";
import { MenuItems, SocialMedia } from "./NavBar.Helper";
import { useState } from "react";

const NavBar = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={Style.NavBar}>
            <Box>
                <Link href="/">
                    <Image sx={Style.Logo} src={logo} alt="logo" />
                </Link>
            </Box>
            <Box sx={Style.MenuDesktop}>
                {MenuItems.map((item) => (
                    <Link
                        sx={Style.Link}
                        key={item.id}
                        href={item.href}
                        className="hover:text-blue-700"
                    >
                        {item.name}
                    </Link>
                ))}
                {/* <Box sx={{ mx: 4 }}>
          {SocialMedia.map((item) => (
            <Link key={item.id} href={item.href}>
              <IconButton
                aria-label={item.id}
                sx={Style.Link}
                icon={<item.icon />}
              />
            </Link>
          ))}
        </Box> */}
            </Box>
            <IconButton
                aria-label="HamburgerIcon"
                sx={{
                    display: {
                        md: "none",
                        base: "flex",
                    },
                    backgroundColor: "white",
                }}
                onClick={() => setOpen(true)}
                icon={<HamburgerIcon />}
            />
            <Drawer
                isOpen={open}
                placement="right"
                onClose={() => setOpen(false)}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody sx={Style.MenuResponsive}>
                        {MenuItems.map((item) => (
                            <Link
                                sx={Style.Link}
                                key={item.id}
                                href={item.href}
                                className="hover:text-blue-700"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Box sx={{ my: 4 }}>
                            {SocialMedia.map((item) => (
                                <Link key={item.id} href={item.href}>
                                    <IconButton
                                        aria-label={item.id}
                                        sx={Style.Link}
                                        icon={<item.icon />}
                                    />
                                </Link>
                            ))}
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default NavBar;
