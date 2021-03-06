/** @jsx jsx */
import { jsx } from '@theme-ui/core'
import { Input } from '@theme-ui/components'
import { useFormContext } from 'react-hook-form'
import TextareaAutosize from 'react-textarea-autosize'

import Text from '~@/typography/Text'
import GuestCard from './GuestCard'

import styles from './style'

const StepGuestDetails = () => {
    const { register, errors } = useFormContext()

    return (
        <div>
            <GuestCard showOverlay={false} />
            <div sx={styles.guestInputWrap}>
                <div sx={styles.formSection}>
                    <label htmlFor="rsvp-guest-name" sx={styles.formSectionLabel}>
                        Name
                    </label>
                    <Input
                        sx={styles.formInput}
                        id="rsvp-guest-name"
                        name="name"
                        placeholder="Name"
                        ref={register({ required: true })}
                    />
                    {errors.name && (
                        <Text size={0} color="red">
                            {errors.date.message}
                        </Text>
                    )}
                </div>
                <div sx={styles.formSection}>
                    <label htmlFor="rsvp-guest-email" sx={styles.formSectionLabel}>
                        Email
                    </label>
                    <Input
                        sx={styles.formInput}
                        id="rsvp-guest-email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        ref={register({ required: true })}
                    />
                    {errors.email && (
                        <Text size={0} color="red">
                            {errors.email.message}
                        </Text>
                    )}
                </div>
            </div>
            <div sx={styles.formSection}>
                <label htmlFor="rsvp-guest-note" sx={styles.formSectionLabel}>
                    Note
                </label>
                <TextareaAutosize
                    id="rsvp-guest-note"
                    type="text"
                    name="note"
                    minRows={3}
                    maxRows={8}
                    placeholder="(optional)"
                    cacheMeasurements
                    ref={register}
                    sx={styles.formInput}
                />
            </div>
        </div>
    )
}

export default StepGuestDetails
