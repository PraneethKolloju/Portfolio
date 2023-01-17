import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
function experience() {
    return (
        <div className='experience' >
            <VerticalTimeline lineColor='black'>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2016-2017'
                    iconStyle={{ background: 'black', color: 'white' }}
                    icon={<SchoolIcon />}
                >
                    <h2>Narayana School,Hyderabad,Telangana</h2>
                    <p>High School</p>
                    <p><b>9.5 GPA</b></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2017-2019'
                    iconStyle={{ background: 'black', color: 'white' }}
                    icon={<SchoolIcon />}
                >
                    <h2>Sri Chaitanya College,Hyderabad,Telangana</h2>
                    <p>Intermediate</p>
                    <p><b>94.9%</b></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='2019-2023'
                    iconStyle={{ background: 'black', color: 'white' }}
                    icon={<SchoolIcon />}
                >
                    <h2>Anurag Group of Institutions,Hyderabad,Telangana</h2>
                    <p>Bachelor's Degree</p>
                    <p><b>8.18 CGPA</b></p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='October 2022-December 2022'
                    iconStyle={{ background: 'white', color: 'blue' }}
                    icon={<WorkIcon />}
                >
                    <h1>Machine learning Intern</h1>
                    <h2>Feynn Labs</h2>
                    <p>Worked on AI Product Prototyping, Market Segmentation using Machine Learning and Data Analysis</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date='January 2023-present'
                    iconStyle={{ background: 'white', color: 'blue' }}
                    icon={<WorkIcon />}
                >
                    <h1>Web Development Intern(MERN)</h1>
                    <h2>HSPM Solutions</h2>
                    <p>Working on React JS, Node ,JavaScript,Bootstrap,React,back-end connectivity</p>
                    {/* <p>Worked on AI Product Prototyping, Market Segmentation using Machine Learning and Data Analysis</p> */}
                </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}

export default experience;