SeoUtils = {
    updateSeo(title, description) {
        if(Meteor.isClient) {
            //Remove older mets
            DocHead.removeDocHeadAddedTags()
            //Set the title of tha 'router'
            DocHead.setTitle(title);
            DocHead.addMeta({name: "description", content: description})
        }
    }
}