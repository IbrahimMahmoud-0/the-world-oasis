import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import { useCheckout } from "../check-in-out/useCheckout";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const navigate = useNavigate();
  const { checkout, isCheckingout } = useCheckout();
  // const booking = {};
  const { booking, isLoading } = useBooking();
  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  const { status, id } = booking;
  // const status = "checked-in";

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{id}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>Check in</Button>
        )}
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        {status === "checked-in" && (
          <Button
            onClick={() => {
              checkout(id);
            }}
            disabled={isCheckingout}
            icon={<FaArrowUp />}
          >
            Check out
          </Button>
        )}
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
