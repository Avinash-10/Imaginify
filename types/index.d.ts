import { formUrlQuery } from "@/lib/utils";

// USER PARAMS
declare type CreateUserParams = {
    username : string;
    firstName : string;
    lastName : string;
    email : string;
    clerkId : string;
    photo : string;
};

declare type UpdateUserParams = {
    username : string;
    firstName : string;
    lastName : string;
    photo : string;
};

// IMAGE PARAMS
declare type AddImageParams = {
    image : {
        title : string;
        transformationType : string;
        publicId : string;
        secureURL : string;
        width? : number;
        height? : number;
        config? : number;
        transformationUrl? : string;
        aspectRatio?: string | undefined;
        color?: string | undefined;
        prompt?: string | undefined;
    };
    userId : string;
    path : string;
};

declare type UpdateImageParams = {
    image : {
        title : string;
        transformationType : string;
        publicId : string;
        secureURL : string;
        width? : number;
        height? : number;
        config? : number;
        transformationUrl? : string;
        aspectRatio?: string | undefined;
        color?: string | undefined;
        prompt?: string | undefined;
    };
    userId : string;
    path : string;
};

declare type Transformation = {
    restore? : boolean;
    fillBackground ? : boolean;
    remove ? : {
        prompt : string;
        removeShadow ? : boolean;
        multiple ? : boolean;
    };
    recolor ? : {
        prompt : string;
        to : string;
        multiple ? : boolean;
    };
    removeBackground ? : boolean;
};

// Transaction Params
declare type CheckoutTransactionParams = {
    plan : string;
    credits : number;
    amount : number;
    buyerId : string;
};

declare type CreateTransactionParams = {
    stripeId: string;
    amount: number;
    credits: number;
    plan: string;
    buyerId: string;
    createdAt: Date;
};

declare type TransformationTypeKey = 
    | "restore"
    | "fill"
    | "remove"
    | "recolor"
    | "removeBackground"

// URL QUERY PARAMS
declare type FormUrlQueryParams = {
    searchParams : string;
    key : string;
    value : string | number | null;
}

declare type UrlQueryParams = {
    params: string;
    key: string;
    value: string | null;
};
  
declare type RemoveUrlQueryParams = {
    searchParams: string;
    keysToRemove: string[];
};
  
declare type SearchParamProps = {
    params: { id: string; type: TransformationTypeKey };
    searchParams: { [key: string]: string | string[] | undefined };
};
  
declare type TransformationFormProps = {
    action: "Add" | "Update";
    userId: string;
    type: TransformationTypeKey;
    creditBalance: number;
    data?: IImage | null;
    config?: Transformations | null;
};
  
declare type TransformedImageProps = {
    image: any;
    type: string;
    title: string;
    transformationConfig: Transformations | null;
    isTransforming: boolean;
    hasDownload?: boolean;
    setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
};