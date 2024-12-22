export interface ChatTileProps {
    avatar: string;
    username: string;
}

export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: string;
}