export interface Message {
    id: string;
    text: string;
    isSent: boolean;
    avatar?: string;
    timestamp: string;
    isTyping: boolean;
}

export interface ChatBubbleProps {
    message: Message;
}

export interface ChatMessageListProps {
    messages: Message[];
}