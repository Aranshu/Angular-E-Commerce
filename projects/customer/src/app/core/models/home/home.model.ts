export interface CategoryLinkModel {
    id: number;
    image: string;
    title: string;
}

export interface CarouselImages {
    id: number;
    desktopImage: string;
    mobileImage: string;
}

export interface CategoryImages {
    id: number;
    image: string;
    title: string;
}

export class Home {
    CategoryLinks: CategoryLinkModel[]; 
    CarouselImages: CarouselImages[];
    CategoryImages: CategoryImages[];
}

