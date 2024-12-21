import { useForm } from "react-hook-form";
import { AppTextInput } from "../../components/AppTextInput/AppTextInput";
import { Box } from "../../components/Box/Box";
import { Spacing } from "../../components/Spacing/spacing";
import { ChatTile } from "../../components/ChatTile/ChatTile";
import { View } from "react-native";
import { styles } from "./styles";
import Icon from "../../../assets/svgs/icon";

export function ChatList() {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            search: "",
        },
        mode: "onSubmit",
    });

    return (
        <Box>
            <Icon name="back" size={32} />
            <AppTextInput
                control={control}
                label="Search"
                placeholder="Search..."
                error={errors.search?.message}
                name="search"
                autoCapitalize="none"
                left="search"
            />
            <Spacing height={20} />
            <ChatTile />
            <ChatTile />
            <ChatTile />
            <ChatTile />
        </Box>
    )
}