import woocomerce from "../../woocomerce";
import Header from "../../components/Header";
import StickyNavbar from "../../components/StickyNavbar";
import Footer from "../../components/Footer";
import FilterBar from "../../components/shop/filterBar";
import Loader from "../../components/Theme/Loader";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faArrowDown, faSearchPlus} from "@fortawesome/free-solid-svg-icons";
import Products from "../../components/products";

const Category = ({category, products}) => {
    return (
        <div>
            <Header></Header>
            <StickyNavbar></StickyNavbar>
            <div className='md:mx-24 md:py-6'>
                <div className='grid md:grid-cols-4 gap-x-6'>
                    {/*<FilterBar filterProducts={filterProducts} attributes={attributes}/>*/}
                    <div></div>
                    <div className='md:col-span-3'>
                        <div className='md:flex md:justify-between'>
                            <div>Showing all {products.length} results</div>
                            <select name="" id="">
                                <option value="default">Default Sorting</option>
                                <option value="popularity">Sort by popularity</option>
                                <option value="average-rating">Sort by average rating</option>
                                <option value="latest">Sort by latest</option>
                                <option value="price:low-to-high">Sort by price:low to high</option>
                                <option value="price:high-to-low">Sort by price:high to low</option>
                            </select>
                        </div>
                        <Products products={products}/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default Category;

export async function getServerSideProps(context) {
    const {slug} = context.params
    const getCategory = async () => {
        const {data} = await woocomerce(`products/categories?slug=${slug}`)
        return data[0];
    }
    const getProducts = async (category) => {
        const {data} = await woocomerce(`products?category=${category}`)
        return data
    }
    const category = await getCategory()
    const products = await getProducts(category.id)
    return {
        props: {
            category,
            products
        }
    }
}