import styled, { css } from 'styled-components'
import { IProduct } from '../../types/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons/faTruck'
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar'
import { Link } from 'react-router-dom'
import { generateLink } from '../../core/helpers/generateLink'
import { AppRoutes } from '../../core/routes'
import { ProductsApi } from '../../requests/products'

type IProductCardTheme = 'card' | 'list'

interface IProductCardProps {
  product: ProductsApi.IProduct
  theme?: IProductCardTheme | undefined
}
export const ProductCard = ({ product, theme = 'list' }: IProductCardProps) => {
  const link = generateLink(AppRoutes.productsId, { id: String(product.id) })
  return (
    <Link to={link}>
      <Wrapper>
        <Image $theme={theme}>
          <ProductImage $theme={theme} src={product.image} alt={product.name} />
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
    </Link>
  )
}

const Wrapper = styled.div`
  font-size: 13px;
`

const Image = styled.div<{ $theme?: IProductCardTheme }>`
  overflow: hidden;
  border-radius: 16px;
  width: 100%;
  position: relative;
  margin-bottom: 16px;
  ${({ $theme }) =>
    $theme === 'list' &&
    css`
      height: 200px; /* Установите максимальную высоту для изображения */
    `}
`

const ProductImage = styled.img<{ $theme?: IProductCardTheme }>`
  width: 100%;
  height: 100%;

  ${({ $theme }) =>
    $theme === 'list' &&
    css`
      object-fit: cover; /* This will ensure the image covers the container without stretching */
      position: absolute;
      top: 0;
      left: 0;
    `}
`

const Name = styled.h3`
  font-size: 13px;
`

const Info = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
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
const RatingValue = styled.div``

const ProductReviews = styled.div``

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
  color: #00ab11;
  margin-top: 8px;
`

const DeliveryTruckIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`

const DeliveryTime = styled.div`
  margin-bottom: 4px;
`

const DeliveryType = styled.div``
