

export default function imageHandler(windowSize, porfolioItem){


    if(windowSize.width > 1000){
        return porfolioItem.image
    } else {
        return porfolioItem.mobileImage
    }

}