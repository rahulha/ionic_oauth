
export class OAuthURLBuilder {

    //Required and common parameters
    private _uri: string;

    private _clientId: string;
    private _clientIdFieldName: string;

    private _redirecturi: string;
    private _redirecturiFieldName: string;

    private _response_type: string;
    private _response_typeFieldName: string;

    private _clientSecret: string;
    private _clientSecretFieldName: string;

    public Parameters: {}

    get Uri(): string { return this._uri; }
    set Uri(value: string) { this._uri = value; }

    get RedirectUri(): string { return this._redirecturi; }
    set RedirectUri(value: string) { this._redirecturi = value; }
    get RedirectUriFieldName(): string { return this._redirecturiFieldName; }
    set RedirectUriFieldName(value: string) { this._redirecturiFieldName = value; }

    get ResponseType(): string { return this._response_type; };
    set ResponseType(value: string) { this._response_type = value; };
    get ResponseTypeFieldName(): string { return this._response_typeFieldName; };
    set ResponseTypeFieldName(value: string) { this._response_typeFieldName = value; };

    get ClientID(): string { return this._clientId; };
    set ClientID(value: string) { this._clientId = value; };
    get ClientIDFieldName(): string { return this._clientIdFieldName; };
    set ClientIDFieldName(value: string) { this._clientIdFieldName = value; };

    get ClientSecret(): string { return this._clientSecret; };
    set ClientSecret(value: string) { this._clientSecret = value; };
    get ClientSecretFieldName(): string { return this._clientSecretFieldName; };
    set ClientSecretFieldName(value: string) { this._clientSecretFieldName = value; };


    constructor() {
        this.RedirectUriFieldName = "Redierct_Uri";
        this.ResponseTypeFieldName = "Response_Type";
        this.ClientIDFieldName = "ClientID";
        this.ClientSecretFieldName = "ClientSecret";
    }


    get OAuthURL(): string {

        if (this.RedirectUri == "" || this.ResponseType == "" || this.ClientID == "")
            throw new Error("Redirect URI, Response Type or Client ID is not provided. Please correct the error");
        else {

            let url: string = this.Uri + "?" +
                ((this.RedirectUri != "") ? this.RedirectUriFieldName + "=" + this.RedirectUri + "&" : "") +
                ((this.ResponseType != "") ? this.ResponseTypeFieldName + "=" + this.ResponseType + "&" : "") +
                ((this.ClientID != "") ? this.ClientIDFieldName + "=" + this.ClientID + "&" : "")

            let p: any;
            for (p in this.Parameters)
                url += (this.Parameters[p]) ? p + "=" + this.Parameters[p] + "&" : "";

            return url;
        }
    }
}