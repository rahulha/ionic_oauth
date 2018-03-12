import { Deeplinks } from '@ionic-native/deeplinks';


export class DeepLinkMatch {
    public args: any;
    public link: any;
    public route: any;
}

export class DeeplinkHandler {

    private Routes: any;

    get HasRouts(): boolean {

        if (Object.keys(this.Routes).length > 0)
            return true;
        else
            return false;

    }

    constructor(private deeplinks: Deeplinks) {
        this.Routes = {};
    }

    public AddRoute(RelativeFilePath: string, File: object) {
        this.Routes[RelativeFilePath] = File;
    }

    public RemoveRoute(RelativeFilePath: string): object {
        let o: object = this.Routes[RelativeFilePath];
        delete this.Routes[RelativeFilePath];
        return o;
    }

    public RouteAt(RelativeFilePath: string): object {
        let o: object = this.Routes[RelativeFilePath];
        return o;
    }

    public OpenDeepLink(SubscribeFunction: (match: DeepLinkMatch) => any, ErrorFunction: (error: Error) => any, Routes?: {}): boolean {

        if (Routes)
            this.Routes = Routes;

        this.deeplinks.route(this.Routes).subscribe((match) => {

            let m: DeepLinkMatch = { args: match.$args, link: match.$link, route: match.$route };

            SubscribeFunction(m);
        },
            (error) => {

                ErrorFunction(error);
            })

        return true;
    }
}