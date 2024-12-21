import { AppText } from "../../components/AppText/AppText";
import { Box } from "../../components/Box/Box";
import { EmptyState } from "../../components/EmptyState/EmptyState";
import { styles } from "./styles";

export function SavedArticles() {
    return (
        <Box>
            <EmptyState />
            <AppText
                fontFamily="OpenSans-Medium"
                fontSize={16}
                style={styles.textStyle}
            >
                Oops! Nothing saved yet. {"\n"}Add some articles to keep things handy.
            </AppText>
        </Box>
    )
}