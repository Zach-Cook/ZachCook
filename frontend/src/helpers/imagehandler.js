

export default function imageHandler(windowSize, porfolioItem){


    if(windowSize.width > 1000){
        return porfolioItem.LargeImage
    } else {
        return porfolioItem.MobileImage
    }

}