import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'
import { IPlaceInfo } from '../../types'
import { conceptColors } from './BaseLayout'
import Text from './Text'

const PlaceInfo = ({ place }: { place: IPlaceInfo }) => {
  const IconImage = ({ src }: { src: string }) => (
    <Image src={src} width={30} height={30} />
  )

  return (
    <Link href={`detail/${place._id}`}>
      <PlaceInfoContainer>
        <DefaultInfoSection>
          <NameTypeSection>
            <Text bold size={1.1}>
              {place.name}
            </Text>
            <Text color="#00B8E0" size={0.8}>
              {place.locationType}
            </Text>
          </NameTypeSection>
          <Text color={conceptColors.mainOrange}>{place.distance}km</Text>
        </DefaultInfoSection>
        <Text size={0.8} color="#b0b0b0">
          {place.address}
        </Text>
        <IconsSection>
          {place.isToiletExists && <IconImage src="/images/toilet.svg" />}
          {place.isChargerExists && <IconImage src="/images/charger.svg" />}
          {place.isElevatorExists && <IconImage src="/images/elevator.svg" />}
          {place.isSlopeExists && <IconImage src="/images/slope.svg" />}
        </IconsSection>
      </PlaceInfoContainer>
    </Link>
  )
}

const PlaceInfoContainer = styled.div`
  margin: 0.2rem;
  div {
    margin-bottom: 0.2rem;
  }
`
const DefaultInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NameTypeSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  div:last-child {
    margin-left: 0.4rem;
  }
`
const IconsSection = styled.section`
  display: flex;
  margin-top: 8px;
  justify-content: flex-end;
  img {
    padding: 0 0.1rem !important;
  }
`

export default PlaceInfo
