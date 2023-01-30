import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const {
        palette: { neutral },
    } = useTheme();

    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[500]}
                    >
                        SHEOUT
                    </Typography>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla
                        consequat
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchase</Typography>
                    <Typography mb="30px">Return & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Contact Us
                    </Typography>
                    <Typography mb="30px">
                        No.63 G Tower Grand Rama 9 (North Wing) 35th and 36th
                        Floor Huai Khwang Bangkok 10310
                    </Typography>
                    <Typography mb="30px">Email: contact@sheout.com</Typography>
                    <Typography mb="30px">+662-634-1469</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
