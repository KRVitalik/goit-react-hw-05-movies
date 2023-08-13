import React, { useEffect, useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { getTrendingMovies } from 'components/API/getFilm';
import HomeTrending from 'components/HomeTrending/HomeTrending';
import {RadioButtonContainer, RadioButton, RadioLabelGroup, RadioLabel } from './TrendingButton.styled';

const TrendingButton = () => {
    const [value, setValue] = useState('day')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getTrendingMovies(value).then(data => {
                setMovies(data.results);
            })
                .catch(err => console.error(err));
        }, [value])

    return (<div>
        <Formik
            initialValues={{
                picked: 'day',
            }}
            onSubmit={(values) => {
                setValue(values.picked)
            }}
        >
            {() => (
                <Form>
                    <RadioButtonContainer>
                    <h1>Trending by:</h1>
                    <div role="group" aria-labelledby="my-radio-group">
                            <RadioLabelGroup>
                        <RadioLabel>
                            <Field type="radio" name="picked" value="day"/>
                            Day
                        </RadioLabel>
                        <RadioLabel>
                            <Field type="radio" name="picked" value="week" />
                            Week
                        </RadioLabel>
                            </RadioLabelGroup>
                    </div>

                    <RadioButton type="submit">Show</RadioButton>
                    </RadioButtonContainer>
                    
                </Form>
            )}
        </Formik>
            <HomeTrending movies={ movies } dayValue={value} />
    </div>
    )
}

export default TrendingButton