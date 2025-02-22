import React, { useEffect, useState } from 'react'
import s from './HouseDetails.module.css'
import { House } from '@/homeworks/sprint-4/hw-16/wizard-world-data.ts'
import { wizardFakeApi } from '@/homeworks/sprint-4/hw-16/wizard-world-fake-api.ts'
import { Link } from 'react-router'
import { clsx } from 'clsx'

export const HouseDetails = () => {
  // 📝 Получите id факультета из URL
  const id = ''
  const [house, setHouse] = useState<House | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      wizardFakeApi
        .getHouseById(id)
        .then((data) => {
          setHouse(data)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return <div className={s.loading}>Загрузка... ⏳</div>
  }

  return (
    <div className={clsx(s.container, 'container')}>
      <Link id="hw16-back" to="/sprint-4" className={s.back}>
        ← Назад
      </Link>
      {house ? (
        <div className={s.contentBox} id={`hw16-${house.name}`}>
          <div className={s.imageColumn}>
            <h3 id={`hw16-house-title`}>{house.name}</h3>
            <img src={house.image} alt={house.name} className={s.image} />
          </div>
          <div className={s.textColumn}>
            <p>
              <strong>Основатель:</strong> {house.founder}
            </p>
            <p>
              <strong>Цвета:</strong> {house.houseColours}
            </p>
            <p>
              <strong>Животное:</strong> {house.animal}
            </p>
            <p>
              <strong>Стихия:</strong> {house.element}
            </p>
            <p>
              <strong>Привидение:</strong> {house.ghost}
            </p>
            <p>
              <strong>Общая комната:</strong> {house.commonRoom}
            </p>
            <h2>Руководители</h2>
            <ul>
              {house.heads.map((head) => (
                <li key={head.id}>
                  {head.firstName} {head.lastName}
                </li>
              ))}
            </ul>
            <h2>Черты</h2>
            <ul>
              {house.traits.map((trait) => (
                <li key={trait.id}>{trait.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={s.error}>Факультет не найден 😢</div>
      )}
    </div>
  )
}
