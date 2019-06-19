export class Socket {
    socket: any;

    constructor(url?: string) {
        this.socket = io();

        this.socket.on('connect', () => {
            console.log('connected');
        });
    }

    emit(channel: string, data?: Object) {
        this.socket.emit(channel, data);
    }

    on(channel: string): Promise<void> {
        return new Promise(resolve => {
            this.socket.on(channel, (data: any) => {
                resolve(data);
            })
        })
        
    }
}   