import styled from 'styled-components'
import { IProduct } from '../../types/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'

interface IProductCardProps {
  product: IProduct
}
export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Wrapper>
      <Image>
        <ProductImage src={product.image} alt={product.name} />
      </Image>
      <Name>{product.name}</Name>
      <Info>
        <Rating>
          <RatingIcon icon={faStar} />
          <RatingValue>{product.rating}</RatingValue>
        </Rating>
        <ProductReviews>{product.reviews} купили</ProductReviews>
      </Info>
      <Price>
        <OriginalPrice>${product.originalPrice}</OriginalPrice>
        <DiscountPercentage>{product.discountPercentage}%</DiscountPercentage>
      </Price>
      <DiscountedPrice>${product.discountedPrice}</DiscountedPrice>
      <Delivery>
        <DeliveryTime>
          <DeliveryTruckIcon icon={faTruck} />
          до {product.deliveryTime} дней
        </DeliveryTime>
        <DeliveryType>мгновенная отправка</DeliveryType>
      </Delivery>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* стили для контейнера карточки */
  font-size: 13px;
`

const ProductImage = styled.img`
  /* стили для изображения продукта */
  width: 100%;
`

const Image = styled.div`
  /* стили для карусели изображений */
  overflow: hidden;
  border-radius: 16px;
`

const Name = styled.h3`
  font-size: 13px;
`

const Info = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  /* стили для типа доставки */
`

const Rating = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`
const RatingIcon = styled(FontAwesomeIcon)`
  font-size: 13px;
  color: #cc290a;
`
const RatingValue = styled.div`
  /* стили для рейтинга продукта */
`

const ProductReviews = styled.div`
  /* стили для количества отзывов */
`

// Price
const Price = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

const OriginalPrice = styled.div`
  text-decoration: line-through;
`
const DiscountedPrice = styled.div`
  font-size: 21px;
  font-weight: 700;
  height: 28px;
  line-height: 28px;
  min-width: 70px;
  color: #fe2722;
`
const DiscountPercentage = styled.div`
  color: #cc290a;
`

// Delivery
const Delivery = styled.div`
  /* стили для цены со скидкой */
  color: #00ab11;
  margin-top: 8px;
`

const DeliveryTruckIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`

const DeliveryTime = styled.div`
  /* стили для времени доставки */
  margin-bottom: 4px;
`

const DeliveryType = styled.div`
  /* стили для типа доставки */
`
