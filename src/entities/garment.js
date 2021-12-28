export class Garment {
    product_categories_mapped = ""
    product_id = 0
    url = ""
    gender = ""
    price = 0
    product_description = ""
    image_urls = []
    product_imags_src = []
    source = ""
    product_categories = []
    images = []
    position = ""
    product_title = ""
    brand = ""
    currency_code = ""
    stock = 0

    constructor(data) {
        try {
            for (var key in this) {
                this[key] = data[key]
            }
        } catch (error) {
            throw error
        }
    }
}
