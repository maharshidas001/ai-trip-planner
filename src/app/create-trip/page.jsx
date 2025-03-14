import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import WidthWrapper from '@/components/WidthWrapper';
import React from 'react';

const page = () => {
  return (
    <>
      <div>
        <WidthWrapper>
          <form className='flex flex-col gap-2 max-w-[800px] mx-auto'>
            <div>
              <label htmlFor="placeNameFormID">Place Name</label>
              <Input id='placeNameFormID' type='text' placeholder='Ex: Goa' />
            </div>

            <div>
              <label htmlFor="timeInDaysFormID">How many days</label>
              <Input id='timeInDaysFormID' type='number' placeholder='Ex: 3' />
            </div>

            <div>
              <lable htmlFor="interestInFormID">Interest in</lable>
              <Select id='interestInFormID'>
                <SelectTrigger>
                  <SelectValue placeholder="Ex: Adventure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="romantic">Romantic</SelectItem>
                  <SelectItem value="relaxing">Relaxing</SelectItem>
                  <SelectItem value="Cultural">Cultural</SelectItem>
                  <SelectItem value="fun">Fun</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="personsFormID">How many persons</label>
              <Select id='personsFormID'>
                <SelectTrigger>
                  <SelectValue placeholder="Ex: Only me" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="only-me">Only me - 1 person</SelectItem>
                  <SelectItem value="with-partner">With partner - 2 persons</SelectItem>
                  <SelectItem value="two-persons">Other - 2 persons</SelectItem>
                  <SelectItem value="three-persons">Other - 3 persons</SelectItem>
                  <SelectItem value="four-persons">Other - 4 persons</SelectItem>
                  <SelectItem value="five-persons">Other - 5 persons</SelectItem>
                  <SelectItem value="six-persons">Other - 6 persons</SelectItem>
                  <SelectItem value="seven-persons">Other - 7 persons</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='w-full'>
              <Button type='submit' className='float-end'>Generate Trip</Button>
            </div>
          </form>
        </WidthWrapper>
      </div>
    </>
  )
}

export default page;